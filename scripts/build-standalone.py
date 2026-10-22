#!/usr/bin/env python3
"""Build self-contained single-file decks (CSS, fonts, logos, reveal.js inlined).
Usage: python3 scripts/build-standalone.py   ->  dist/en.html, dist/fr.html
Source decks (en/index.html, fr/index.html) stay modular; dist/ files can be
emailed or opened from anywhere. Re-run after editing the decks or theme/."""
import base64, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def rd(p): return open(os.path.join(ROOT, p), encoding='utf-8').read()
def b64(p): return base64.b64encode(open(os.path.join(ROOT, p), 'rb').read()).decode()

fonts = re.sub(r'url\("fonts/([^"]+)"\)',
               lambda m: 'url("data:font/woff2;base64,%s")' % b64('theme/fonts/' + m.group(1)), rd('theme/fonts.css'))
css = rd('theme/vo2.css').replace('@import url("fonts.css");', fonts)
logos = {c: 'data:image/svg+xml;base64,' + b64('theme/brand/vo2-wordmark-%s.svg' % c) for c in ('white', 'black')}
js = rd('theme/vo2.js')
a = "var base = (document.currentScript && document.currentScript.src || '').replace(/[^/]*$/, '');"
b = "'<img alt=\"VO2 Group\" src=\"' + base + 'brand/vo2-wordmark-' + (dark ? 'white' : 'black') + '.svg\">'"
assert a in js and b in js, 'theme/vo2.js changed: update this script'
js = js.replace(a, 'var LOGO = %r;' % logos).replace(b, "'<img alt=\"VO2 Group\" src=\"' + LOGO[dark ? 'white' : 'black'] + '\">'")

def script(src): return '<script>\n' + src.replace('</script>', '<\\/script>') + '\n</script>'
def swap(s, old, new):
    assert old in s, old
    return s.replace(old, new)

os.makedirs(os.path.join(ROOT, 'dist'), exist_ok=True)
for lang in ('en', 'fr'):
    s = rd('%s/index.html' % lang)
    s = swap(s, '<link rel="stylesheet" href="../vendor/reveal/reveal.css">', '<style>\n' + rd('vendor/reveal/reveal.css') + '\n</style>')
    s = swap(s, '<link rel="stylesheet" href="../theme/vo2.css" id="theme">', '<style id="theme">\n' + css + '\n</style>')
    s = swap(s, '<link rel="stylesheet" href="../vendor/reveal/plugin/highlight/monokai.css">', '<style>\n' + rd('vendor/reveal/plugin/highlight/monokai.css') + '\n</style>')
    for f in ('reveal.js', 'plugin/markdown.js', 'plugin/highlight.js', 'plugin/notes.js'):
        s = swap(s, '<script src="../vendor/reveal/%s"></script>' % f, script(rd('vendor/reveal/' + f)))
    s = swap(s, '<script src="../theme/vo2.js"></script>', script(js))
    open(os.path.join(ROOT, 'dist', lang + '.html'), 'w', encoding='utf-8').write(s)
    print('dist/%s.html' % lang)
