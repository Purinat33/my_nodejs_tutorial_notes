//Many modules has built in streams
//For big files (readfilesync writefilesync might not be efficient for this)

const {createReadStream} = require('fs');

//Default chunk reading = 64kb
// last chunk = remainder
//highWaterMark = control size
const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, 
    encoding: 'utf-8'
});

stream.on('data', (result)=>{
    console.log(result);
});

stream.on('error', (err)=>{
    console.log(err);
});
