const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const Victor = require('victor');
const crypto = require('crypto');

const PORT = process.end.PORT || 3000;

app.get('/', function(req, res){ res.sendFile(__dirname + '/client/index.html'); });

// Handle creating new user

// Handle existing user login

io.on('connect', function(socket){
    // 
});

http.listen(3000, function(){
    console.log('listening on port ' + PORT);
});
