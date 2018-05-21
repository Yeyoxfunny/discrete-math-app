const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/discrete-math-app'));
const port = Number(process.env.PORT || 5000);

app.listen(port, function() {
    console.log('Your files will be served through this web server');
});
