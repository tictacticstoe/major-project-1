module.exports.home = function(req, res){
    // return res.render('home',{
    //     title:"HOME"
    // });
    return res.render('home',{
        title:"Todo App",
        contact_list: todo_list
    });
}