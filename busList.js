var MongoClient = require("mongodb").MongoClient;
var url = require("./constant").url;
var commonMethod = require("./common");

module.exports = function(app) {
  app.get("/busList", function(req, res) {
    var busList = {};
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo
        .collection("Bus List")
        .find({})
        .toArray(function(err, result) {
          commonMethod.responseCallback(err, result, db, res);
        });
    });
  });

  app.post("/filteredBusListBasedOnFromTo", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      var query = { From: req.body.From, To: req.body.To };
      dbo
        .collection("Bus List")
        .find(query, { projection: { _id: 0 } })
        .toArray(function(err, result) {
          commonMethod.responseCallback(err, result, db, res);
        });
    });
  });
};
