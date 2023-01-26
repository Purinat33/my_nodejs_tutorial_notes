const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/sub/first.txt', 'utf8');

const second = readFileSync('./john.txt', 'utf8');

console.log(second);

const x = 10;
writeFileSync('./result.txt', `This is ${x}`, {flag: 'a'}); //flag a = append

