// require express and path libraries
const express = require('express');
const path = require('path');
// Set up port to run the server
const port = 7000;

// require the database file
const db = require('./config/mongoose');

// fire up express server
const app = express();

// setting view engine
app.set('view engine', 'ejs');
// setting view path
app.set('views', path.join(__dirname, 'views'));
// use build-in middleware to parse the data send through form
app.use(express.urlencoded());
// use build-in middleware to link static files
app.use(express.static('assets'));


// for routes use localhost:8000/ to see the main functionality
app.use('/', require('./routes'));


// running the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in setting up server: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
});