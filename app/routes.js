const express = require('express');
const router  = express.Router();
module.exports = router;

//ROUTES

//homepage
router.get('/', function(req, res){
  res.send('This is the portfolio / homepage')
});

//about page
router.get('/about', function(req, res){
  res.send('This is the about page')
});

//resume
router.get('/resume', function(req, res){
  res.send('This is where my resume will be')
});

//contact get
router.get('/contact', function(req, res){
  res.send('This is where the contact form will be')
});

//contact form post
router.post('/contact')

