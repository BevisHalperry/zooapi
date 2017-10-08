var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Animal = require('./api/models/animalModel'), //created model loading here
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Animaldb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/animalRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('zoo RESTful API server started on: ' + port);
