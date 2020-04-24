const express= require('express');
const app= express();
const port= 8000;

const db=require('./config/mongoose');
const todo = require('./models/todo');

//use express router
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'))

pp.listen(port,function(err){
    if(err)
    {
       // console.log("Error: ",err);
        console.log(`Error in running the server: ${err}`);              
    }
    console.log(`server is running on port: ${port}`);
})