var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/api/fast', (req, res) => {
    console.log('fast endpoint hit');
    res.send({ response: 'fast' });
});

app.get('/api/slow', (req, res) => {
    setTimeout(() => {
        console.log('slow endpoint hit');
        res.send({ response: 'slow' });
    }, 5000);
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);

});  