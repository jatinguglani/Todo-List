// require express and path libraries
const express = require('express');
const path = require('path');
// Set up port to run the server
const port = 7000;

// require the database file
const db = require('./config/mongoose');
// require the todolist database(schema)
const Todolist = require('./models/todolist');

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


// return response from the server
app.get('/', function(req, res){

    Todolist.find({}, function(err, todolists){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

        // return dynamic responses
        return res.render('home', {
            title: 'To-Do List',
            task_list: todolists
        });
    });
});


// controller to get the form data and route it
app.post('/create-task', function(req, res){

    Todolist.create({
        description: req.body.description,
        due_date: req.body.due_date,
        category: req.body.category
    }, function(err, newTask){
        if(err){
            console.log('error in creating a contact!');
            return;
        }

        // console.log("*****************", newTask);
        return res.redirect('back');
    });
});


// delete contact route and controller
app.get('/delete-contact', function(req, res){
    var list = Object.keys(req.query);
    for(let id of list){
        Todolist.findByIdAndDelete(id, function(err){
            if(err){
                console.log('Error in deleting an object from database');
            }
        });
    }
    return res.redirect('back');
});



// running the server
app.listen(port, function(err){
    if(err){
        console.log(`Error in setting up server: ${err}`);
        return;
    }
    console.log(`Server is up and running at port: ${port}`);
});