var express = require('express');

var app = express();

app.use(express.static('./build/index.html'));


var port = process.env.PORT || 5053;
app.listen(port, function(){
    console.log('listening on port ' + port + '...');
});