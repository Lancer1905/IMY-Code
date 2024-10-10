// Pieter Venter u23896257
const fs = require('fs');

const fileRead = () => {
    fs.readFile('./events.json', (err,data)=>{
        if (err){
            console.log(err);
        }

        return JSON.parse(data);
        
    });
}

const fileWrite = (fileContent) => {

    const wf = JSON.stringify(fileContent);

    fs.writeFile('./newEvents.js',wf, (err)=>{
        if (err){
            console.log(err);
        }
    });
}

exports.fileRead = fileRead;
exports.fileWrite = fileWrite;