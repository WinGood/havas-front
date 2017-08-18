var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './dist')));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 80!');
});