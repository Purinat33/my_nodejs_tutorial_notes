//ExpressJS

const express = require('express');
const app = express(); //express refers to const express

//Some useful methods:
//  app.get
//  app.post
//  app.put     
//  app.delete  ---> From the slides (HTTP messages)

//  app.all     ---> Work with all (ex: 404)
//  app.use     ---> Middlewares (later)
//  app.listen  ---> 

app.get('./', ()=>{
    
}); //Resource the user is accessing

const port = 3000;
app.listen(port, ()=>{
    //Will run when the server is started
    console.log(`Server is listening at port ${port}`); 
});