const {readFile, writeFile} = require('fs');

console.log("Start");
readFile('./content/second.txt', 'utf-8' ,(err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    
    const first = result;
    readFile('./content/first.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        
        const second = result;
        writeFile('./content/result-async.txt', `${first} and ${second}`, (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log("Done task");
        })
    })

})

console.log("Next task starting");

// Async - next task start before the first one is done

// promise, Async, Await  = better alternative