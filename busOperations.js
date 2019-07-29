var MongoClient = require("mongodb").MongoClient;
var url = require("./constant").url;
var commonMethod = require("./common");

module.exports = function(app) {
  app.post("/addBus", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo.collection("Bus List").insertOne(req.body, function(err, result) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 Not Found");
          throw err;
        } else {
          res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
          return res.end(JSON.stringify("Updated successfully"));
        }
      });
    });
  });

  app.post("/removeBus", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      var deleteQuery = { busId: req.body.busId };
      dbo.collection("Bus List").deleteOne(deleteQuery, function(err, result) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 Not Found");
          throw err;
        } else {
          res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
          return res.end(JSON.stringify("Deleted successfully"));
        }
      });
    });
  });

  app.post("/addTravels", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      dbo.collection("Travels List").insertOne(req.body, function(err, result) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 Not Found");
          throw err;
        } else {
          res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
          return res.end(JSON.stringify("Travells Added successfully"));
        }
      });
    });
  });

  app.post("/removeTravels", function(req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("BusBooking");
      var deleteQuery = { travelsId: req.body.travelsId };
      dbo
        .collection("Travels List")
        .deleteOne(deleteQuery, function(err, result) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404 Not Found");
            throw err;
          } else {
            res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
            return res.end(JSON.stringify("Travells Deleted successfully"));
          }
        });
    });
  });
};
