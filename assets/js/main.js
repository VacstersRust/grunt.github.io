(() => {
  const conf = window.GROUND_CONFIG || {};
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      menuToggle.setAttribute('aria-label', expanded ? 'Открыть меню' : 'Закрыть меню');
      menu.classList.toggle('is-open', !expanded);
      document.body.classList.toggle('menu-open', !expanded);
    });
    document.addEventListener('keydown', e => {if(e.key === 'Escape' && menu.classList.contains('is-open')) { menuToggle.click(); menuToggle.focus(); }});
    document.addEventListener('click', e => {
      if (!menu.contains(e.target) && !menuToggle.contains(e.target) && menu.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Открыть меню'); menu.classList.remove('is-open'); document.body.classList.remove('menu-open');
      }
    });
    menu.addEventListener('click', e => {
      if (e.target.closest('a')) {
        menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.setAttribute('aria-label', 'Открыть меню');
        menu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      }
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
  const phone = (conf.phone || '').trim();
  const email = (conf.email || '').trim();
  document.querySelectorAll('[data-phone]').forEach(el => {
    if (phone) { el.textContent = phone; el.href = 'tel:' + phone.replace(/[^+\d]/g, ''); el.hidden = false; }
    else el.hidden = true;
  });
  document.querySelectorAll('[data-email]').forEach(el => {
    if (email) { el.textContent = email; el.href = 'mailto:' + email; el.hidden = false; }
    else el.hidden = true;
  });
  document.querySelectorAll('[data-telegram]').forEach(el => {
    if (conf.telegram) { el.href = 'https://t.me/' + conf.telegram.replace(/^@/, ''); el.hidden = false; }
    else el.hidden = true;
  });
  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    if (conf.whatsapp) { el.href = 'https://wa.me/' + conf.whatsapp.replace(/\D/g, ''); el.hidden = false; }
    else el.hidden = true;
  });
  const optionalEmail = document.querySelector('[data-contact-email]');
  if (optionalEmail) optionalEmail.hidden = !email;
  const optionalMessengers = document.querySelector('[data-contact-messengers]');
  if (optionalMessengers) optionalMessengers.hidden = !(conf.telegram || conf.whatsapp);
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }});
  }, {threshold: .08}) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('in-view'));
  document.querySelectorAll('img[data-fallback]').forEach(img => {
    img.addEventListener('error', () => { if (img.dataset.fallback && !img.dataset.failed) { img.dataset.failed = '1'; img.src = img.dataset.fallback; }});
  });
  const serviceFilterButtons = document.querySelectorAll('[data-filter]');
  const serviceCards = document.querySelectorAll('[data-group]');
  serviceFilterButtons.forEach(btn => btn.addEventListener('click', () => {
    serviceFilterButtons.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
    const filter = btn.dataset.filter;
    serviceCards.forEach(card => {card.hidden = filter !== 'all' && card.dataset.group !== filter;});
  }));
  const form = document.querySelector('[data-brief-form]');
  if (form) { const query = new URLSearchParams(location.search); const qp = query.get('service'); const select = form.querySelector('[name="type"]'); if (qp && select && [...select.options].some(o => o.value === qp)) select.value = qp; const town = query.get('location'); const townInput = form.querySelector('[name="location"]'); if (town && townInput && town.length <= 80) townInput.value = town; }
  const toast = document.querySelector('[data-toast]');
  function notify(message) {
    if (!toast) return;
    toast.textContent = message; toast.classList.add('visible');
    clearTimeout(notify._timer); notify._timer = setTimeout(() => toast.classList.remove('visible'), 3600);
  }
  const output = document.querySelector('[data-brief-output]');
  const result = document.querySelector('[data-brief-result]');
  const copy = document.querySelector('[data-brief-copy]');
  if (form && result && output) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const value = k => String(data.get(k) || '').trim();
      const lines = [
        'Заявка на земляные работы / Истра',
        'Задача: ' + (form.querySelector('[name="type"]')?.selectedOptions[0]?.textContent || value('type')),
        'Где: ' + value('location'),
        'Объём / размер: ' + (value('volume') || 'уточню'),
        'Проезд техники: ' + (value('access') || 'уточним'),
        'Когда: ' + (value('date') || 'согласуем'),
        'Пожелания: ' + (value('notes') || 'нет'),
        'Как связаться: ' + (value('contact') || 'ответом на это сообщение')
      ];
      output.value = lines.join('\n'); result.hidden = false;
      result.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center'});
      const mail = result.querySelector('[data-mail-send]');
      if (mail) {mail.hidden = !email; if(email) mail.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Заявка на земляные работы') + '&body=' + encodeURIComponent(output.value);}
      const sms = result.querySelector('[data-sms-send]');
      if (sms && phone) { sms.href = 'sms:' + phone.replace(/[^+\d]/g, '') + '?body=' + encodeURIComponent(output.value); sms.hidden = false; }
      else if (sms) sms.hidden = true;
      const wa = result.querySelector('[data-wa-send]');
      if (wa) {wa.hidden = !conf.whatsapp; if (conf.whatsapp) wa.href = 'https://wa.me/' + conf.whatsapp.replace(/\D/g,'') + '?text=' + encodeURIComponent(output.value);}
    });
    copy?.addEventListener('click', async () => {
      try {await navigator.clipboard.writeText(output.value);notify('Текст заявки скопирован.');}
      catch {output.select(); document.execCommand('copy');notify('Выделен текст заявки — скопируйте его.');}
    });
  }
  // Без API и настроенной почты никакие персональные данные не передаются с сайта.
})();
