"use strict";

//Pieter Venter u23896257
var express = require("express");
var path = require("path");
var app = express();
app.use(express["static"](path.resolve(__dirname, '../front_end')));
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../front_end/index.html'));
});
var PORT = 3000;
app.listen(PORT, function () {
  console.log("Listening on localhost:".concat(PORT));
});