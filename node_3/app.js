// Modules
/*
Help when we split codes into many 
smaller files while we can run
```node app.js``` on only one file
*/

//CommonJS - every file is module (by default)
//Modules - encapsulated code (only share minimum)

//Require = telling to use module (first_module.js)
const names = require('./module_example/first_modules');
//ALWAYS START WITH 1 . EVEN IF THE MODULE'S IN THE SAME FOLDER
console.log(names);


//Importing function as well
const func = require('./module_example/second_module');
console.log(func);

const data = require('./module_example/flavor');

func(names.john); //Original function name = hello()
                //We import it as func()

console.log(data);  

require('./greande'); 