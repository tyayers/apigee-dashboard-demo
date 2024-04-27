const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// defining the Express app
const app = express();
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());

const countries = ["de", "fr", "ru", "it", "es", "pl", "ir"];

const locindexes = {}

const locs = [
  {
    SalesOrder: "9000000232",
    Latitude: "57.76751",
    Longitude: "46.86181"
  },
  {
    SalesOrder: "9000000348",
    Latitude: "50.43109",
    Longitude: "7.40425"
  },
  {
    SalesOrder: "9000000363",
    Latitude: "48.87214",
    Longitude: "3.53797"
  }
]

app.get('/locations', (req, res) => {
  res.send(locs);
});

app.post('/locations/:orderid', (req, res) => {
  var orderId = req.params.orderid;
  let obj = locs.find(o => o.SalesOrder === orderId);

  if (!obj) {
    getNewLocation().then((result) => {
      var newObj = {
        SalesOrder: orderId,
        Latitude: result.lat,
        Longitude: result.lon
      };

      locs.push(newObj);
      res.status(201).send(newObj);
    })
      .catch((error) => {
        res.status(404).send("Location not available.");
      });
  }
  else {
    // we already have this object
    res.status(409).send("Object already exists.");
  }
});

// starting the server
app.listen(8080, () => {
  console.log('listening on port 8080');
});

function getNewLocation() {
  return new Promise((resolve, reject) => {
    var i = Math.floor(Math.random() * countries.length);
    axios("https://api.3geonames.org/?randomland=" + countries[i] + "&json=1")
      .then((locresult) => {
        resolve({ "lat": locresult.data.major.latt, "lon": locresult.data.major.longt })
      })
      .catch((error) => {
        reject("error");
      });
  });
}
