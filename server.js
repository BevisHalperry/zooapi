var express = require('express');
var cors = require('cors'),
app = express(),
port = process.env.PORT || 88,
mongoose = require('mongoose'),
Animal = require('./api/models/animalModel'), //created model loading here
bodyParser = require('body-parser');

var whitelist = ['http://zoobeacon.dev', 'http://zoobcn.co']

app.options('*', cors()) // include before other routes

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  
  app.get('/animals/:id', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
  })
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Animaldb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/animalRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('zoo RESTful API server started on: ' + port);
