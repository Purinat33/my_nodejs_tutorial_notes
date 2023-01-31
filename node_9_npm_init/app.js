const _ = require('lodash');

//Note that there are different between internal module (http)
//and external modules (lodash, bootstrap etc.)
//Namely, we need to install them first


//Lodash demo for the sake of demo
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);