// LOCAL
const secret = "Secret variable";

// SHARE
const john = "John";
const peter = "Peter";

console.log(module);
/*
//Module is an object

Module {
  id: '.',
  path: '/Users/purinatpat/Documents/Programming/ICT/test/node_3/module_example',
  exports: {},
  filename: '/Users/purinatpat/Documents/Programming/ICT/test/node_3/module_example/first_modules.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/purinatpat/Documents/Programming/ICT/test/node_3/module_example/node_modules',
    '/Users/purinatpat/Documents/Programming/ICT/test/node_3/node_modules',
    '/Users/purinatpat/Documents/Programming/ICT/test/node_modules',
    '/Users/purinatpat/Documents/Programming/ICT/node_modules',
    '/Users/purinatpat/Documents/Programming/node_modules',
    '/Users/purinatpat/Documents/node_modules',
    '/Users/purinatpat/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}

//Important part -> exports {}
//Whatever is in there can be shared
*/

module.exports = {
    john, 
    peter
}; //peter and john can now be used
//We're exporting multiple items