var path = require('path')
var express = require('express');
var app = express();

var clientPath = path.resolve(__dirname +  "../../../client/app/")
app.use(express.static(clientPath));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
