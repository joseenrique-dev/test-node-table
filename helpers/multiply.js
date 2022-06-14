const fs = require('fs');
const colors = require('colors');

const multiply = ( base = 5, list = false, until = 10 ) => {
    console.log('list-->',list);
    console.clear();
    const colorBase = colors.bgBlue(base);
    console.log(` =================================== `.yellow);
    console.log(` ========`.red+`    Tabla del ${colorBase}` +`   ======== `.red);
    console.log(` =================================== `.yellow);

    let out = '';
    for (let index = 0; index < until; index++) {
        out += `${colorBase}`+ `  *`.green+` ${index}` +` =  `.green +`${base * index}\n`.trap;     
    }
    if( list )
        console.log(out);
    try {
        const fileName = `table-${base}.txt`;
     fs.writeFileSync(`./outFiles/${fileName}`,out);   
     return Promise.resolve(fileName) // we can do this only with async in the top of the function
    } catch (error) {
        console.log(error);
        return Promise.reject(error);        
    }
}

module.exports = multiply