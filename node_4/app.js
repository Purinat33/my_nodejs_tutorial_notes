// Built-in modules
// OS
// PATH
// FS
// HTTP
// etc. etc.

// More info: nodejs.org
const name = require('./../node_3/module_example/first_modules');

//OS Modules
const os = require('os'); //Built-in module (no .)
console.log(os);

//Info about current user
const user = os.userInfo();
console.log(user);

// Return system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    endian: os.endianness()
}

console.log(currentOS);