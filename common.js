exports.responseCallback = function(err, result, db, res) {
  if (err) {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not Found");
    throw err;
  } else {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    });
    res.end(JSON.stringify(result));
  }
  return res;
};
