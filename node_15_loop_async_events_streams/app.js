//Event loop

const {readFile} = require('fs');

console.log('Started the first task');
// CHECK FILE PATH
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first task');
    console.log("-------------------------------");
});
console.log('Starting next task');
// readFile is async thus offload until it is ready/error then we execute it
/*
Yes, that's correct! Asynchronous callback functions allow NodeJS to perform other operations while it is waiting for the callback function to complete. The event loop will continue to handle other events and operations while the callback function is running in the background.
This means that the code after the asynchronous operation won't be blocked and can continue to execute, even if the callback function takes a long time to complete. When the callback function is finished, it will be added back to the event queue and executed, allowing NodeJS to handle multiple events and operations efficiently and without any delays.
 */

//No clogging the queue while it is loading!

console.log('------------------');
//Timeout
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third'); //Set time out is also asynchronous


