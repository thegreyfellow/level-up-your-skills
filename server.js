#!/usr/bin/env node
// Static server for the workshop repo — zero dependencies.
// Usage: node server.js [port]     (default 3000, override with argv or PORT)
// ponytail: no deps, no SPA routing, no TLS — venue convenience only.
var http = require('http');
var fs = require('fs');
var path = require('path');
var root = __dirname;

var MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff', '.woff2': 'font/woff2'
};

function serve(req, res) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405).end(); return;
  }
  var urlPath;
  try { urlPath = decodeURIComponent(req.url.split('?')[0]); }
  catch (e) { res.writeHead(400).end('bad request'); return; }
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  if (urlPath === '/favicon.ico') { res.writeHead(204).end(); return; }
  // Guard: resolved path must stay inside the repo (no ../../etc/passwd).
  var file = path.normalize(path.join(root, urlPath));
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403).end('forbidden'); return;
  }
  fs.readFile(file, function (err, data) {
    if (err) { res.writeHead(404).end('not found'); return; }
    res.writeHead(200, {
      'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
      'cache-control': 'no-store'
    });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
}

var wanted = Number(process.argv[2] || process.env.PORT || 3000);
var server = http.createServer(serve);

server.on('error', function (err) {
  if (err.code === 'EADDRINUSE' && wanted !== 0) {
    console.log('port ' + wanted + ' busy — picking a free one');
    wanted = 0; // random free port
    server.listen(0);
  } else {
    console.error(err.message); process.exit(1);
  }
});

server.listen(wanted, function () {
  var port = server.address().port;
  var url = 'http://localhost:' + port;
  console.log('Level Up Your Skills — ' + url);
  console.log('  ' + url + '/fr/   (original)');
  console.log('  ' + url + '/en/   (english)');
  // Best-effort open; never fatal.
  try { require('child_process').exec('xdg-open ' + url, function () {}); } catch (e) {}
});
