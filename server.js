var express = require('express');

// Create our app 
var app = express();

// app.use lets you add functionality to your application
// express.static tells us the name of the folder that will expose to the server
app.use(express.static('public'));

//start the server with app.listen - takes the port and function
app.listen(3000, function() {
    console.log('Express server is up on port 3000');
});