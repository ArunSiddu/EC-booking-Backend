const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/BusBooking";

app.get("/busList", function(req, res) {
  var busList = {};
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("BusBooking");
    dbo
      .collection("Bus List")
      .find({}, { projection: { _id: 0 } })
      .toArray(function(err, result) {
        if (err) throw err;
        busList = result;
        db.close();
        res.send(busList);
      });
  });
});

app.post("/filteredBusListBasedOnFromTo", function(req, res) {
  var filteredBusList = {};
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("BusBooking");
    var query = { From: req.body.From, To: req.body.To };
    dbo
      .collection("Bus List")
      .find(query, { projection: { _id: 0 } })
      .toArray(function(err, result) {
        if (err) throw err;
        filteredBusList = result;
        db.close();
        res.send(filteredBusList);
      });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
