const express = require('express');
const app     = express();
const port    =   process.env.PORT || 8080;

//ROUTES

//homepage
app.get('/', function(req, res){
  res.send('This is the portfolio / homepage')
});

//about page
app.get('/about', function(req, res){
  res.send('This is the about page')
});

//resume
app.get('/resume', function(req, res){
  res.send('This is where my resume will be')
});

//contact get
app.get('/contact', function(req, res){
  res.send('This is where the contact form will be')
});

//contact form post
app.post('/contact')


// START THE SERVER
app.listen(port);
console.log("The magic is happening on port " + port);