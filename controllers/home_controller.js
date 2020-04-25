const todo = require('../models/todo');
const db = require('../config/mongoose');


module.exports.home = function(req, res){
    // return res.render('home',{
    //     title:"HOME"
    // });
    todo.find({},function(err,todos){
        if(err)
        {
            console.log('error in fetching contacts');
            return;
        }
    return res.render('home',{
        title:"Todo App",
        todo_list: todos
        });
    });
}

//creating a new task in the list 
module.exports.createe = function(req, res){

    console.log(req.body);
    todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err,newTask){
        if(err){
            console.log("error in creating a task");
            return res.redirect('back');
        }   
        console.log('******',newTask);
        return res.redirect('back');
    });
}

//deleting the selected task in list 
module.exports.delete = function(req, res){

    let id=req.query.id;
    //find the contact in the databse using id and delete
    todo.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("error in deleting");
            return;
        }
    });
    return res.redirect('back');
}