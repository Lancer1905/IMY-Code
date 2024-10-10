const express = require('express');
const http = require('http')
const socketIo = require('socket.io');
const path = require('path');
const poll = require('./poll');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

const cats = [
    {
        name: 'pebble',
        votes: 0 
    },
    {
        name: 'sunshine',
        votes: 0
    },
    {
        name: 'miso',
        votes: 0
    },
    {
        name: 'panko',
        votes: 0
    },
    {
        name: 'snowball',
        votes: 0
    }
];

const Poll = new poll(cats);

io.on('connection', (socket) => {

    socket.emit('updateVotes', Poll.getVotes());

    socket.on('sendId', (id) => {
        console.log('A user connected with ID: ' + id);
    });

    socket.on('vote', (catName) => {
        Poll.vote(catName);
        io.emit('updateVotes', Poll.getVotes());
    });

    socket.on('disconnect', () => {
        console.log('A user has disconnected');
    });
});

server.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});
