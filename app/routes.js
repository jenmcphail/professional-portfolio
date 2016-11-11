const express = require('express');
const path = require('path')

// Creates and initializes router
const router  = express.Router();
module.exports = router;

//ROUTES

//homepage
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/portfolio.html'))
});

//about page
router.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '../public/about.html'))
});

//resume
router.get('/resume', function(req, res){
  res.send('This is where my resume will be')
});

//contact get
router.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '../public/contact.html'))
});

//contact form post
router.post('/contact')

