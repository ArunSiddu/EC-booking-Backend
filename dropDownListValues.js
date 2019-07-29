var MongoClient = require("mongodb").MongoClient;
var url = require("./constant").url;
var commonMethod = require("./common");

module.exports = function(app) {
  app.get("/inputValueList", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo.collection("Locations List").findOne({}, function(err, result) {
        commonMethod.responseCallback(err, result, db, res);
      });
    });
  });

  app.get("/inputBusType", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo.collection("Bus Type").findOne({}, function(err, result) {
        commonMethod.responseCallback(err, result, db, res);
      });
    });
  });

  app.get("/travelsList", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo
        .collection("Travels List")
        .find({})
        .toArray(function(err, result) {
          commonMethod.responseCallback(err, result, db, res);
        });
    });
  });
};
