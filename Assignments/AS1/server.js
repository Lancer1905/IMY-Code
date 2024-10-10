const http = require('http');
const fs = require('fs');

const start = () => {
    const onRequest = (request, response) => {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                throw console.log(err);
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
                'Content-Length': data.length
            });
            res.write(data);
            res.end();
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}
exports.start = start;