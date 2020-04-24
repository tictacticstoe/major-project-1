module.exports.home = function(req, res){
    // return res.render('home',{
    //     title:"HOME"
    // });
    return res.render('home',{
        title:"Todo App",
        contact_list: todo_list
    });
}
module.exports.create = function(req, res){

    todo.create({
        description: req.body.description,
        date:req.body.date,
        category:req.body.category,]
    }, function(err,newTask){
        if(err){
            console.log("error in creating a contact");
            return;
        }
        console.log('******',newTask);
        return res.redirect('back');
    });
}
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