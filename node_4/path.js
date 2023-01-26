const path = require('path');
const { PassThrough } = require('stream');
// Interact with file systems
console.log(path.sep);

const filePath = path.join('/content/', 'generic', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//Get absolute path
const absolute = path.resolve(__dirname, 'content', 'generic', 'test.txt');
console.log(absolute);