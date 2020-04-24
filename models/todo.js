const mongoose= require('mongoose');

const todoSchema= new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category:{
        type: category,
        required: true
    },
    date:{
        type:date,
        required:true
    }
});

const todo = mongoose.model('Contact',contactSchema);

module.exports = todo;