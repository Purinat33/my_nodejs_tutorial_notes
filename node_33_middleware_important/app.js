const express = require('express');
const app = express();

//Express middleware
//Functions that executes during reqest and has access to req and res 
//Middleware are pretty much used to make up expressjs


/*
    req => Middleware => res
*/

const logger = require('./logger');

// Moved to logger.js
// const logger = (req, res, next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);
//     next(); //This is passing it on to the next function/middleware
//             //In this case its the app.get
// }

//Next step how do we apply logger automaticcally to all the routes?
app.use('/api',logger); //THIS IS TELLING THAT WE "USE" THE MIDDLEWARE LOGGER
                //because app.use will invoke the arg for every routes
                //Note that order here matters (Everything in express.js really)
                //If any route appear above the app.use, that route will be uneffected by the used middleware
                //If we add the path before the function (/api) then all routes from that will be affected by app.use
                // /api/home
                // /api/product

app.get('/api/product', (req,res)=>{
    res.send('Product');
})

app.get('/api/item', (req,res)=>{
    res.send('item');
})




app.get('/',  /*logger,*/(req,res)=>{
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time);
    /*console:
        GET / 2023 
    */
   //If we want to do this in about
   //then we have to copy and paste everything for all pages
   //the best way is to make a function with all the logic and attach it to all web we want
   //We shall named this logger
    //This logger is a middleware

    //For middleware, we must pass the middleware to the next middleware until we terminate it by sending the RES
    //Think of linked list
    //So, unless we want to send back the response by ourselves, we must pass it to the next middleware

    //This is why middlewares are so powerful, since we can customize it to our logic
    //Chain it or response 

    res.send('Home')
});

// Invoke logger() in about page as well
app.get('/about', /*logger,*/ (req,res)=>{
    res.send('about')
})


//For now, our middlewares are crowding the file
//We should separate logger (functions) into a separate file.
//And how about we make it add logger to every single route instead of us hardcoding it into each routes

app.listen(3000,()=>{
    console.log('Server listening on port 3000...');
})