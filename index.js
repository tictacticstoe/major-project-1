const express= require('express');
const db=require('./config/mongoose');
const app= express();
const port= 8000;


const todo = require('./models/todo');
app.use(express.urlencoded());

//using our css file 
app.use(express.static('./assets'))

//use express router
app.use('/',require('./routes'));

//use our html file 
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err)
    {
       // console.log("Error: ",err);
        console.log(`Error in running the server: ${err}`);              
    }
    console.log(`server is running on port: ${port}`);
})