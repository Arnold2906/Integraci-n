var express = require('express');
var path = require('path');
var hbs = require('express-handlebars');
var body_parser = require('body-parser');
var routes = require('./routes/route');


var app = express();

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(body_parser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const server = app.listen(8000, function() {
    console.log(`Listening http://localhost:${server.address().port}`);
  });
  