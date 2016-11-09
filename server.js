const express = require('express');
const app     = express();
const port    =   process.env.PORT || 8080;

//ROUTES
app.get('/test', function(req, res){
  res.send('Connected!')
});


// START THE SERVER
app.listen(port);
console.log("The magic is happening on port " + port);