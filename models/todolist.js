//require mongoose library
const mongoose = require('mongoose');

//set-up the schema
const todolistSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
});

// naming the database
const Todolist = mongoose.model('Todolist', todolistSchema);  

// exporting the database
module.exports = Todolist;
