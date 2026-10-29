"""Basic static link/asset smoke-check. Run from any directory: python tools/check_site.py"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote

root=Path(__file__).resolve().parents[1]
class Links(HTMLParser):
    def __init__(self):super().__init__();self.urls=[]
    def handle_starttag(self,tag,attrs):
        data=dict(attrs)
        if tag in ('a','link') and data.get('href'):self.urls.append(data['href'])
        if tag in ('img','script') and data.get('src'):self.urls.append(data['src'])

issues=[]
for file in root.rglob('*.html'):
    p=Links();p.feed(file.read_text(encoding='utf-8'))
    for url in p.urls:
        clean=url.split('#')[0].split('?')[0]
        if not clean or clean.startswith(('https:','http:','tel:','mailto:','sms:','data:','#')):continue
        path=(file.parent/unquote(clean)).resolve()
        if path.is_dir():path/='index.html'
        if not path.is_file():issues.append(f'{file.relative_to(root)} -> {url}')
print('HTML страниц:',len(list(root.rglob('*.html'))),'битых путей:',len(issues))
for issue in issues:print(issue)
raise SystemExit(1 if issues else 0)
