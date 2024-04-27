// const tracer = require('@google-cloud/trace-agent').start({
//   projectId: 'bruno-1407a',
//   keyFilename: 'bruno-owner-key.json',
// });

const compression = require('compression');
const express = require("express");
const axios = require('axios');
const history = require('connect-history-api-fallback-exclusions');
const dotenv = require('dotenv');
dotenv.config();

var clientBasePath = "";
if (process.env.clientBasePath)
    clientBasePath = process.env.clientBasePath;

var app = express();
app.use(history({
  exclusions: [
    "/parameters/*",
    "/orders/*",
    "/customers/*",
    "/maps/*",
    "/updates/*"
  ]
}));
app.use(compression());

// SSE
const SSE = require('express-sse');
const sse = new SSE();

console.log(clientBasePath);
app.use(clientBasePath, express.static('./public'));

app.get(clientBasePath + '/updates', sse.init);

app.post(clientBasePath + '/updates', (req, res) => {
  console.log(`Updates, now broadcasting..`);
  var update = {
    timestamp: (new Date().toISOString())
  };
  sse.send(update);
  res.send("Alert received.");
});

app.get(clientBasePath + '/parameters/:name', (req, res) => {
    var name = req.params.name;
    console.log("parameter: " + name + "=" + process.env[name]);
    var result = {};
    result[name] = process.env[name];

    res.send(result);
});

app.get(clientBasePath + '/orders', async (req, res) => {

  var options = {
    method: "GET",
    url: "https://" + process.env.apiHost + "/orderservice/orders",
    headers: {
      "x-api-key": process.env.orderKey
    }
  };

  axios(options).then((response) => {
    res.send(response.data);
  });
});

app.get(clientBasePath + '/orders/:id', (req, res) => {
  var id = req.params.id;
  var options = {
    method: "GET",
    url: process.env.productCatalogBaseUrl + "/orderservice/orders/" + id,
    headers: {
      "x-api-key": process.env.orderKey
    }
  };
  axios(options).then((response) => {
    res.send(response.data);
  });
});

app.get(clientBasePath + '/maps/:operation', (req, res) => {
  var op = req.params.operation;
  var url = "https://" + process.env.apiHost + clientBasePath + "/maps/" + op;

  console.log(url);

  if (op == "js")
    url += "?callback=" + req.query.callback;
  else if (op == "place") {
    url += "?input=" + req.query.input;
  }

  var options = {
    method: "GET",
    url: url,
    headers: {
      "x-api-key": process.env.mapKey
    }
  };
  axios(options).then((response) => {
    res.send(response.data);
  });
});

var server = app.listen("8080", function(){
    console.log("Server started at http://localhost:8080");
});