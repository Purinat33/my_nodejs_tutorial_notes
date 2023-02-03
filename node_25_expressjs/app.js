//ExpressJS

const express = require('express');
const app = express(); //"express" refers to "const express"

//Some useful methods:
//  app.get
//  app.post
//  app.put     
//  app.delete  ---> From the slides (HTTP messages)

//  app.all     ---> Work with all (ex: 404)
//  app.use     ---> Middlewares (later)
//  app.listen  ---> 

app.get('/', (req, res)=>{ //path (root first) & callback that will be invoked everytime a user is performing a get request at root
    console.log('User hits home page');
    res.status(200).send('Home Page');
}); //Resource the user is accessing (GET)

app.get('/about', (req, res)=>{
    res.status(200).send('About Page');
});

//What about going to /contact that doesn't exist yet
//404 Error
//We can make our own 404 response

app.all('*', (req, res)=>{ //path==* means ALL page
    res.status(404).send(`
        <h1>Resource not found</h1>
    `);
}); //All for http verbs
//It's a good idea to explicitly give status code before sending res

const port = 3000;
app.listen(port, ()=>{
    //Will run when the server is started
    console.log(`Server is listening at port ${port}... `); 
});