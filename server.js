const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const port       = process.env.PORT || 8080;

// body parser config
app.use(bodyParser.urlencoded());

//handles routes
const router  = require('./app/routes')
app.use('/', router)
app.use(express.static('public'))


// START THE SERVER
app.listen(port);
console.log("The magic is happening on port " + port);