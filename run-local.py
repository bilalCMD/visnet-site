#!/usr/bin/env python3
"""
VIS Networks — local preview server with clean URLs.

Clean URLs (e.g. /about instead of /about.html) cannot work by just
double-clicking a file (file://). This tiny server serves the site so the
clean links work exactly like they will on real hosting.

Run:  python run-local.py      (or double-click run-local.bat on Windows)
Then open:  http://localhost:8000
"""
import http.server
import socketserver
import os
import webbrowser
import threading

PORT = 8000
ROOT = os.path.dirname(os.path.abspath(__file__))


class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        # strip query/anchor
        clean = path.split('?', 1)[0].split('#', 1)[0]
        fs = super().translate_path(clean)
        # if no real file and no extension, try the .html version
        if not os.path.isdir(fs) and not os.path.exists(fs):
            root, ext = os.path.splitext(fs)
            if not ext and os.path.isfile(fs + '.html'):
                return fs + '.html'
        return fs


def open_browser():
    webbrowser.open(f'http://localhost:{PORT}/')


if __name__ == '__main__':
    os.chdir(ROOT)
    threading.Timer(0.8, open_browser).start()
    with socketserver.TCPServer(('', PORT), CleanURLHandler) as httpd:
        print(f'VIS Networks preview running at  http://localhost:{PORT}/')
        print('Press Ctrl+C to stop.')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\nStopped.')
