const express = require('express');
const path    = require('path')
const dotenv  = require('dotenv').config();

// Creates and initializes router
const router   = express.Router();
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
  res.sendFile(path.join(__dirname, '../public/img/jen-mcphail-resume.pdf'))
});

//contact get
router.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '../public/contact.html'))
});

//contact form post
router.post('/contact', function(req, res){
  console.log(req.body);
  res.sendFile(path.join(__dirname, '../public/thank-you.html'))
});

