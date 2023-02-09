//This is gonna be another middleware
//This is just an example function not a real world authorizing
const authorize = (req,res,next) =>{
    //Example:
    //Checking for "user" in the query string
    const {user} = req.query;
    if(user == 'john'){
        req.user = {name: 'john', id:3};
        //For real world, we can use this to check cookie/JSON web token for exist and if so we get user from the DB
        //Now we pretty much attach this user to the req which will stay until the end of its lifetime
        next(); //Still need to call next
    }
    else{
        res.status(401).send(`
            <h1>401</h1>
            <h4>Unauthorized</h4>
        `);
    }
    console.log('authorized');
    next();
}

module.exports = authorize;