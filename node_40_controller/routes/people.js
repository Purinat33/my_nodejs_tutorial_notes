//For people api
const express = require('express');
//Instead of going app = express();
//we make router instead

const router = express.Router();


//We will move this one later
const {people} = require('./../data')
const {
    getPeople,
    postPeople,
    addPerson,
    delPerson
} = require('./../controllers/people');


//Remove every link
//Since we use this with app.get(/api/people)
//So we remove the api/people parts of everything
//Thus we remove the complexity of it

//And now with controller functions we can go even further
// router.get('/', getPeople);
// router.post('/', postPeople);
// router.put('/:id', addPerson);
// router.delete('/:id', delPerson);

//Basically we move all req res to the controllers
//and make route files cleaner and shorter

//Routes: just for the route and which functions to call
//Controller: for all the functions

//Alternate route setup methods
//by chaining (route).method(controller function)
router.route('/').get(getPeople).post(postPeople);
router.route('/:id').put(addPerson).delete(delPerson);
//Both works the same way

module.exports = router;