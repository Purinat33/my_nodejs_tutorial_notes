const {readFile, writeFile} = require('fs');

readFile('./test.txt', 'utf-8' ,(err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    
    const first = result;
    readFile('./content/sub/first.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        
        const second = result;
        writeFile('./john-result-async.txt', `${first} and ${second}`, (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })

})