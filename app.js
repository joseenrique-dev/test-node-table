const multiply  = require('./helpers/multiply');

multiply().then(fileName => {
    console.log(`The file ${fileName} has been saved!`);
}).catch(error => {
    console.log(error);
}
);