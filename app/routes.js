const express = require('express');
const path    = require('path')
const dotenv  = require('dotenv').config();

//Requires nodemailer for email form submission
const nodeMailer = require('nodemailer')

//Creates and initializes router
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
  const transporter = nodeMailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
      user: 'jen.website.email@gmail.com',
      pass: process.env.EM_PASS
    }
  });

  const mailOptions = {
    from: 'jen.website.email@gmail.com',
    to: 'mcphail.jen@gmail.com',
    subject: req.body.subject,
    text: req.body.message
};

  transporter.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
      res.send('error');
    }else{
      console.log("message sent");
      res.sendFile(path.join(__dirname, '../public/thank-you.html'))
    } 
  });
});

