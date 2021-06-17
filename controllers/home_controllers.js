// require the todolist database(schema)
const Todolist = require('../models/todolist');

// action -- > for rendering todo list app main page
module.exports.home =  function(req, res){
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
}

// action --> for creating todo task and inserting in mongodb
module.exports.createTask = function(req, res){

    // creating and adding task
    Todolist.create({
        description: req.body.description,
        due_date: req.body.due_date,
        category: req.body.category
    }, function(err, newTask){
        if(err){
            console.log('error in creating a task!');
            return;
        }
        return res.redirect('back');
    });
}

// action --> for deletion of todo task from mongodb database
module.exports.deleteTask = function(req, res){
    var list = Object.keys(req.query);
    for(let id of list){
        Todolist.findByIdAndDelete(id, function(err){
            if(err){
                console.log('Error in deleting an object from database');
            }
        });
    }
    return res.redirect('back');
}
