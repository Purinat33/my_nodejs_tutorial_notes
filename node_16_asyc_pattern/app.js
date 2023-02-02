//Cleaner and better event loops when comparing to nesting CB function
// Async Pattern
// So any task will not block the rest of the codes/users

const {readFile, writeFile} = require('fs').promises; //Turn rfs and wfs into promises
// const util = require('util'); 
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// A lot of modules will provide functions that return promise

/*
readFile('./content/first.txt', 'utf-8', (err, data) =>{
    if(err){
        return;
    }
    else{
        console.log(data);
    }
}); */
//This is ok, but when the program grows it will become problematic
// Solution: turn this into promise with async/await


//Promise makes it cleaner
//When using async/await we can make the program waits until promise is completed

const start = async() =>{
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const secondd = await readFile('./content/second.txt', 'utf-8');
        
        await writeFile(
            './content/result.txt', 
            `This is the result of ${first} and ${secondd} Upended`,
            {flag: 'a'});
        
        console.log(first, secondd);
    } catch (error) {
        console.log(error);
    }
}; //This will only executed when the promise (getText()) is resolved
//Cleaner than nesting callback functions

start();


// const getText = (path) =>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf-8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     });
// };

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err)=> console.log(err));


// getText('./second.txt')
// .then((result)=>console.log(result))
// .catch((err)=>console.log(err));
