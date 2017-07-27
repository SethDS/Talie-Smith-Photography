var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve('build') ));


var port = process.env.PORT || 5053;
app.listen(port, function(){
    console.log('listening on port ' + port + '...');
});