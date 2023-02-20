//For login/register/logout routes
const express = require('express');
const router = express.Router();

//since /login is base in app.use then we use / only
router.get('/', (req,res)=>{
    res.send('Hello World')
})

module.exports = router;