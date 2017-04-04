// This is the file where we will:
// Configure our application
// Connect to our database
// Create our Mongoose models
// Define routes for our RESTful API
// Define routes for our frontend Angular application
// Set the app to listen on a port so we can view it in our browser

//Setup
var express =  require('express');
var app = express(); 					//create app with express
var mongoose = require('mongoose'); 	//mongoose for Mongodb (interaction)
var morgan = require('morgan'); 		//log requests to the console (Express 4)
var bodyParser = require('body-parser'); //pull data from HTML POST (Express 4)
var methodOverride = require('method-override'); //Simulate DELETE and PUT (Express 4)
var cors = require('cors'); //for cross plataform

//Configuration
mongoose.connect('mongodb://localhost/wtfplayers');  //connection to our db

app.use(morgan('dev'));	//logs all requests to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); //parse application/x-www-form-urlencoded 
app.use(bodyParser.json());	//parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

//CORS CONFIG
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   	next();
});

// Mongodb MODEL

// var PlayerStat = mongoose.model('PlayerStat', {
// 	gamesPlayed: [String],
// 	wins: Number,
// 	lost: Number,
// 	amountMovies: [String],
// 	amountActors: [String]
// });

//Routes

	//GET actor's movie list


// listen
app.listen(8080);
console.log("App listening on port 8080");









