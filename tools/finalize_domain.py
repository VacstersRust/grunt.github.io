"""Finalize static SEO URLs for a confirmed domain / GitHub Pages URL.
Usage: python tools/finalize_domain.py https://example.ru/
Run in root of the delivered site. No third party dependencies.
"""
from pathlib import Path
from urllib.parse import urlparse
from xml.etree.ElementTree import Element,SubElement,ElementTree,indent
import re,sys

if len(sys.argv) != 2:
    raise SystemExit('Использование: python tools/finalize_domain.py https://домен.ru/')
base=sys.argv[1].strip().rstrip('/')+'/'
p=urlparse(base)
if p.scheme!='https' or not p.netloc or any(c in base for c in ' \t\n'):
    raise SystemExit('Укажите полный публичный URL сайта, начиная с https://')
root=Path(__file__).resolve().parents[1]
image=base+'assets/img/og-cover.jpg'
urls=[]
for file in sorted(root.rglob('*.html')):
    if 'tools' in file.parts:continue
    rel=file.relative_to(root).as_posix()
    if rel=='404.html':
        value=file.read_text(encoding='utf-8')
        if 'name="robots"' not in value:
            value=value.replace('</head>','<meta name="robots" content="noindex, nofollow"></head>')
        file.write_text(value,encoding='utf-8')
        continue
    tail='' if rel=='index.html' else (rel[:-len('index.html')] if rel.endswith('/index.html') else rel)
    url=base+tail
    urls.append(url)
    html=file.read_text(encoding='utf-8')
    html=re.sub(r'<link\s+rel="canonical"\s+href="[^"]*"\s*/?>','',html)
    html=re.sub(r'<meta(?=[^>]*property="og:url")[^>]*>','',html)
    html=re.sub(r'<meta(?=[^>]*property="og:image")[^>]*>','',html)
    extra=f'<link rel="canonical" href="{url}"><meta property="og:url" content="{url}"><meta property="og:image" content="{image}">'
    html=html.replace('</head>',extra+'</head>')
    file.write_text(html,encoding='utf-8')
urlset=Element('urlset',{'xmlns':'http://www.sitemaps.org/schemas/sitemap/0.9'})
for url in urls:
    loc=SubElement(SubElement(urlset,'url'),'loc');loc.text=url
indent(urlset,space='  ')
ElementTree(urlset).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(root/'robots.txt').write_text(f'User-agent: *\nAllow: /\n\nSitemap: {base}sitemap.xml\n',encoding='utf-8')
print(f'Готово: {len(urls)} страниц, sitemap.xml и robots.txt для {base}')
