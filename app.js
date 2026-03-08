// Entry point for the application

// express application
var express = require('express');
// require the controller we make
var surveyController = require('./surveyController');

var app = express();

var urlEncodedSurvey = surveyController.urlencoded({extended : false});


// set up template engine
app.set('view engine', 'ejs');


app.get('/index', function(req,res){
    res.render('index', {qs: req.query});

});

app.post('/index', urlEncodedSurvey, function(req,res){
    console.log(req.body);
    res.render('index', {qs: req.query});
});


// static file serving
app.use(express.static('./public'));

// fire function from surveyController
surveyController(app);

// listen to port
app.listen(3000);
console.log('listening port 3000');