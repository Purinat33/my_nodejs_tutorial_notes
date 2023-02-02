//Event driven programming
//Used heavily in node.js
//Many modules use events

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

//common methods:
// on - listen for an event
// emit - emit an event

customEmitter.emit('response');
customEmitter.on('response', (name, id)=>{
    console.log(`data received from ${id}:${name}`);
}); //On 'response' event, do said callback function (log)

customEmitter.on('response', ()=>{
    console.log(`some other logic`);
});
customEmitter.emit('response', 'john', 22);

//Order matters (listen first before emitting it)
