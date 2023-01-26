//Sync vs async

const {readFileSync, writeFileSync, write} = require('fs');
console.log("Begin");
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt',
    `THE RESULT IS ${first} and ${second}`,
    {flag: 'a'}
)

console.log('FIRST TASK DONE');
console.log('Next task beginning');

// Syncing: Going line by line (can take time)


