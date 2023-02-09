const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next(); //This is passing it on to the next function/middleware
            //In this case its the app.get
}

module.exports = logger;