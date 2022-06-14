const argv = require('./config/yargs');
const multiply  = require('./helpers/multiply');
const colors = require('colors');

console.clear();

console.log(argv.base)

multiply(argv.base, argv.list).then(fileName => {
    console.log(`The file ${fileName} has been saved!`.rainbow);
}).catch(error => {
    console.log(error);
}
);