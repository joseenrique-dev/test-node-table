const multiply  = require('./helpers/multiply');
const argv = require('yargs')
.option('l', {
    demand: false,
    alias: 'list',
    description: 'list of numbers to multiply',
    type: 'boolean',
    default: false
})
.option('b', {
    alias: 'base',
    demand: true,
    type: 'number',
    demandOption: true
}).check(function(argv) {
    if ( isNaN(argv.base) ) {
        throw new Error('Base must be greater a valid number');
    }
    return true;
}).argv;
console.clear();

console.log(argv.base)

multiply(argv.base, argv.list).then(fileName => {
    console.log(`The file ${fileName} has been saved!`);
}).catch(error => {
    console.log(error);
}
);