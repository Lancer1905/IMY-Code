const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    fs.readFile('./index.html', (err,data)=>{
        if (err){
            throw console.log(err);
        }

        res.writeHead(200,{
            'Content-Type'   : 'text/html',
            'Content-Length' : data.length 
        });
        res.write(data);
        res.end();
    });
}).listen(1500);