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
    description: 'base number to multiply',
    demandOption: true
}).check(function(argv) {
    if ( isNaN(argv.base) ) {
        throw new Error('Base must be greater a valid number');
    }
    return true;
}).argv;

module.exports = argv;