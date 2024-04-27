const express = require("express");
const webSocketServer = require('websocket').server;
const http = require('http');

var app = express();

app.post('/updates', (req, res) => {
  console.log(`Updates, now broadcasting..`);
  var update = {
    timestamp: (new Date().toISOString())
  };
  sendMessage(JSON.stringify(update));
  res.send("Alert received.");
});

var expressserver = app.listen("8080", function(){
  console.log("Server started at http://localhost:8080");
});

const wsServer = new webSocketServer({
  httpServer: expressserver
});

// I'm maintaining all active connections in this object
const clients = {};
const sendMessage = (json) => {
  // We are sending the current data to all connected clients
  Object.keys(clients).map((client) => {
    clients[client].sendUTF(json);
  });
}

// This code generates unique userid for everyuser.
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

wsServer.on('request', function(request) {
  var userID = getUniqueID();
  console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
  // You can rewrite this part of the code to accept only the requests from allowed origin
  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
  console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));

  connection.on('close', function(connection) {
    console.log((new Date()) + " Peer " + userID + " disconnected.");
    delete clients[userID];
  });
});

