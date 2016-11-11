const express = require('express');
const app     = express();
const port    =   process.env.PORT || 8080;

//handles routes
const router  = require('./app/routes')
app.use('/', router)
app.use(express.static('public'))


// START THE SERVER
app.listen(port);
console.log("The magic is happening on port " + port);