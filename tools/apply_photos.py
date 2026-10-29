"""Insert verified local WebP shots into static HTML without changing unrelated markup.
Usage: python tools/apply_photos.py (from the project root or elsewhere)
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PHOTO_DIR = ROOT / 'assets' / 'img' / 'photos'
PHOTO_RE = re.compile(r'(<img\b[^>]*\bdata-photo-slot="([\w-]+\.webp)"[^>]*>)', re.I)
SRC_RE = re.compile(r'\bsrc="[^"]*"')
updated = 0
for path in sorted(ROOT.rglob('*.html')):
    original = path.read_text(encoding='utf-8')
    def put(match):
        global updated
        tag, filename = match.group(1), match.group(2)
        photo = PHOTO_DIR / filename
        if not photo.is_file():
            return tag
        # Using os.path.relpath keeps generated sites relocatable as a ZIP.
        import os
        url = Path(os.path.relpath(photo, path.parent)).as_posix()
        updated += 1
        return SRC_RE.sub('src="' + url + '"', tag, count=1)
    result = PHOTO_RE.sub(put, original)
    if result != original:
        path.write_text(result, encoding='utf-8')
print(f'Local photographs inserted into {updated} image placements. No missing files were used.')
