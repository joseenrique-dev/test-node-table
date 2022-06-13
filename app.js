const multiply  = require('./helpers/multiply');
const argv = require('yargs').argv;

console.clear();

console.log(argv.base)

// multiply().then(fileName => {
//     console.log(`The file ${fileName} has been saved!`);
// }).catch(error => {
//     console.log(error);
// }
// );