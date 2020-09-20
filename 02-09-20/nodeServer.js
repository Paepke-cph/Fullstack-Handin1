const http = require('http')
const osInfo = require('../Modules/OSInfo')
const DOS_Detector = require('./dosDetector')
const detector = new DOS_Detector(3000)

const server = http.createServer((req, res) => {
    if(req.url === '/api/os-info') {
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(osInfo.GetOSInfo()))
        return res.end()
    }
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write(`<h2>Simple node HTTP server demo</h2>
              <p>Exposes this endpoint <code>/api/os-info</code></p>`)
        return res.end()
    }
});

detector.on('DosDetected', ({url,deltaTime}) => {
    console.log(`DosDetected -> \t url: ${url} \t Time Between: ${deltaTime}`)
})

server.on('connection', (sock) => {
    detector.addUrl(sock.remoteAddress)
})

server.listen(3000)
console.log('Listening on 3000:')