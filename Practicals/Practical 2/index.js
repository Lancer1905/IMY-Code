// Pieter Venter u23896257
const fs = require('fs');
const fileManager = require('./fileManager.js');
const dataValidation = require('./dataValidation');

const eventsArray = fileManager.fileRead();

//console.log(fileManager.fileRead());

const filteredArray = eventsArray.filter(evt => {
    return (dataValidation.checkDate(evt.date));
});

const writeArray = filteredArray.forEach(evt => {
    evt.validName = dataValidation.checkName(evt.name);
});

fileManager.fileWrite(writeArray);