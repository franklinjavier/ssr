
var express = require('express');
var path = require('path');
var port = 3000;
var bodyParser = require('body-parser');
var cons = require('consolidate');

// Make sure to include the JSX transpiler
require("node-jsx").install();

var app = express();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
// app.set('views', path.join(__dirname, 'views'));
app.engine('html', cons.ejs);
app.set('view engine', 'html');

// Set up Routes for the application
require('./routes')(app);
app.get('/index', require('./components/Index/index'));
app.get('/login', require('./components/Login/login'));

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.render('notfound');
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
