# ГРУНТ / ИСТРА — фотобанк и промпты

**Задача:** единый фоторяд для сайта по земляным работам мини-экскаватором в Истре и городском округе Истра. Кадры носят **иллюстративный характер**, не являются фотографиями выполненных заказов и не должны выдаваться за них.

## Визуальный код

- **Настроение:** документальная съёмка промышленной техники, премиальная коммерческая фотография без рекламной постановочности.
- **Цвет:** угольно-зелёные тени `#101514` и `#202724`, землистые серо-коричневые тона, умеренный ржаво-оранжевый `#F47734`, холодное пасмурное небо. Без неонового оранжевого/кислотной насыщенности.
- **Съёмка:** оптика 28–85 мм, естественное мягкое освещение, низкая точка для героизации, высокая детализация грунта и механики. Чёткий главный объект, 30–45% спокойных участков для вёрстки, асимметричная композиция.
- **Местность:** реальный частный участок Подмосковья — берёзы, сосны, деревянные заборы, дачные дома, влажный суглинок, без пальм/небоскрёбов/пустынь. Внешность техники — компактный гусеничный мини-экскаватор, **без выдуманных логотипов**, не большой карьерный экскаватор.
- **Формат:** WebP для сайта, sRGB, без водяных знаков, надписей и рамок. Генерируйте исходник с запасом для обрезки: 1600–2200 px по длинной стороне.

### Общий negative prompt (добавлять к каждому кадру)

`no text, no captions, no typography, no logo, no watermark, no fake branding, no safety violations, no people in the excavator digging zone, no visible or damaged underground utilities, no distorted tracks, no duplicate buckets, no floating hydraulics, no extra booms, no oversized construction equipment, no toy-like CGI, no cartoon, no fisheye, no HDR halos, no oversaturated orange, no oversharpening, no artificial lens flares, no stock-photo handshake, no people staring at the camera`

## 1. Главный экран — hero-mini-excavator.webp

**Формат:** 4:5 (вертикальный участок десктопного hero); safe area по левому и нижнему краю. **Где:** главная / контакты.

**Prompt:**
> Ultra-photorealistic editorial construction photography, compact orange tracked mini excavator on a real suburban property in Istra district near Moscow, seen from a dramatic low three-quarter front angle, the digging arm and steel bucket in the foreground, rich wet dark loam with realistic clumps, subtle pine trees and modest Russian countryside fences in the distant background, overcast daylight after rain, dark charcoal green shadows and muted earthy tones, restrained warm orange accent, crisp visible hydraulic pipes and correctly constructed metal tracks, realistic scale, subtle mud splashes, asymmetrical architectural composition, excavator occupies central right side, left side deliberately calm and dark with generous negative space, premium high-end industrial documentary photography, 35mm lens, cinematic depth and contrast, natural color grading, portrait 4:5, absolutely no text or graphic elements.

## 2. Траншея — trench-water.webp

**Формат:** 3:2, горизонтальный. **Где:** карточка «Траншеи», страница услуги.

**Prompt:**
> Photorealistic documentary close-to-ground side view of a compact tracked mini excavator digging a narrow, clean trench for future underground communications on a small private Russian suburban plot, neat parallel soil edges, realistic dark clay and loose earth, bucket emerging from the cut, low wooden fence and birch trees softly blurred behind, overcast sky, strong foreground/background separation, diagonal trench leading the eye across frame, bold asymmetrical composition with clear soil texture, muted charcoal and olive tones with controlled orange excavator accent, clean professional commercial construction photography, 50mm lens, natural imperfect ground, landscape 3:2, no pipes installed, no text, no logos.

## 3. Дренаж — drainage.webp

**Формат:** 3:2. **Где:** карточка и отдельная страница «Дренаж».

**Prompt:**
> Ultra-realistic documentary photograph of an early-stage drainage excavation on a damp private property near Moscow, narrow drainage channel with fresh moist loamy soil and a modest compact mini excavator working at the far end, shallow wet puddles reflecting soft grey cloud light, believable slope and garden border, no existing utilities exposed, visually precise earthwork, restrained industrial editorial aesthetic, orange machine is a visual accent against dark charcoal green trees and muted brown soil, balanced off-center framing, 35mm lens, realistic details, high-end photography, landscape 3:2, no text, no logo.

## 4. Фундамент — foundation.webp

**Формат:** 3:2. **Где:** карточка и страница «Фундаменты».

**Prompt:**
> Photorealistic architectural construction documentary, compact tracked mini excavator beside a freshly prepared small shallow foundation excavation on a private house plot in rural Moscow region, readable straight pit edges and layered soil, carefully arranged spoil heap, partially visible wooden construction stakes in the background but no unsupported engineering details, soft overcast side light, dramatic dark soil texture and gently luminous orange excavator, strict editorial perspective, crisp composition, premium construction website photography, realistic bucket geometry, landscape 3:2, no people near excavation, no text or logos.

## 5. Планировка участка — grading.webp

**Формат:** 3:2. **Где:** карточка и страница «Планировка».

**Prompt:**
> Ultra-realistic professional construction photograph of a compact mini excavator reshaping a sloped garden plot at a Russian countryside residence, early stage landscape preparation with distinct bands of exposed dark earth, natural grass edges, simple pine and birch woodland and a modest wooden fence, low angle looking along the terrain, sense of practical progress without claiming finished landscaping, operator inside the cabin only, asymmetrical balanced composition, grey daylight, muted deep greens and charcoal with warm orange machinery accent, clean editorial color grading, 35mm lens, landscape 3:2, no text, no logos.

## 6. Крупный план ковша — bucket-closeup.webp

**Формат:** 4:5. **Где:** второй кадр на странице техники; можно использовать как инфографический фон.

**Prompt:**
> Macro editorial industrial photograph of a mini excavator steel digging bucket with realistic worn cutting edges and cohesive wet loam, visible steel links and hydraulic joints above, extreme tactile detail of scraped metal, bolts, hoses and earth, low viewpoint, dramatic grazing overcast light, blurred dark green garden and orange cab accent far behind, large negative area on upper left suitable for overlaid web layout elements, rich shadows yet preserved texture, premium technical commercial photography, 85mm lens, vertical 4:5, no people, no text, no logos.

## 7. Узкий проезд — narrow-access.webp

**Формат:** 4:5. **Где:** «Сценарии», блок работы на частном участке.

**Prompt:**
> Ultra-realistic construction documentary of a small tracked mini excavator carefully moving through a narrow but physically plausible garden passage between a simple timber fence and a modest suburban house outside Moscow, equipment fits with safe clearance and no contact with structures, believable tread width and arm position, pine and birch trees beyond, strong linear perspective and vertical framing, orange machine is the central subject, premium dark green and neutral earth-tone grading under cloudy daylight, cinematic but truthful, 35mm lens, portrait 4:5, no text or logos, no invented machine branding.

## 8. Общий план площадки — site-wide.webp

**Формат:** 16:9. **Где:** «Сценарии», общий план; широкие секции сайта.

**Prompt:**
> Panoramic high-end documentary photograph of a real small earthworks site near Istra, Moscow oblast, one compact mini excavator working beside a carefully marked area of exposed earth on a private property, sensible soil stockpile, sparse birch trees, pine forest and low wooden property fences, deep atmospheric overcast sky, sweeping diagonal tracks in soil, asymmetrical composition with the machine positioned in right third and substantial quiet left half for copy, natural understated dramatic contrast, dark olive and charcoal color grade with subtle warm orange accent, realistic terrain proportions, premium industrial photography, wide horizontal 16:9, no text, no logos.

## 9. Деталь грунта / траншеи — trench-detail.webp

**Формат:** 3:2. **Где:** вторые фотографии на страницах услуг.

**Prompt:**
> Hyperrealistic technical editorial photograph focused on a freshly excavated narrow trench in moist natural Russian clay and loam, detailed layered cross-section with organic soil clumps, clean cut edges, steel mini-excavator bucket entering from upper right without touching buried services, strong dark foreground and softly blurred quiet suburban garden background, tactile realism, no pipes or cables, controlled contrast and earthy desaturated cinematic color, 50mm lens, diagonal visual rhythm, landscape 3:2, no people, no text, no logos.

## 10. Профиль техники — machine-profile.webp

**Формат:** 4:5. **Где:** страница техники; блок «Компактный подход».

**Prompt:**
> Premium professional product-like environmental photograph of an actual compact orange tracked mini excavator with mechanically accurate boom, bucket, continuous tracks and cabin, three-quarter side profile on a gravel and earth area of a private rural Russian property, subdued spruce and pine background, real cloudy natural daylight, camera slightly below bucket height, dramatic clean silhouette with plenty of breathing room, elegant dark industrial editorial color grading, fine realistic dirt on steel tracks and slightly worn paint, 50mm lens, portrait 4:5, no logos, no license plates, no text.

## Как подставить в сайт

1. Сгенерируйте понравившиеся кадры (не нужно сразу все 10); экспортируйте в **WebP** с именами ровно как выше.
2. Положите файлы в `assets/img/photos/`.
3. Из корневой папки сайта выполните `python tools/apply_photos.py`. Скрипт заменит только те фото, файлы которых уже существуют; остальные оставит демонстрационными.
4. Откройте главную и страницы услуг, проверьте композицию на 390 px и 1440 px. Рекомендуемый вес каждого кадра 150–400 КБ (hero может быть больше для детализации).
5. После замены иллюстраций проверьте подписи «ФОТО — ИЛЛЮСТРАЦИЯ»: AI-изображения также должны оставаться обозначенными как иллюстративные, а не как реальные выполненные заказы.

**Важно:** не генерировать фейковые отзывы, паспорта техники, реальную разметку коммуникаций или фотографии выполненных объектов для портфолио. Для раздела «Наши работы» позже нужны настоящие фото с участков.
