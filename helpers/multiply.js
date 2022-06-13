const fs = require('fs');

const multiply = ( base = 5, list = false ) => {
    console.log('list-->',list);
    console.clear();
    console.log(` =================================== `);
    console.log(` ======== Tabla del ${base} ======== `);
    console.log(` =================================== `);

    let out = '';
    for (let index = 0; index < 10; index++) {
        out += `${base} * ${index} = ${base * index}\n`;     
    }
    if( list )
        console.log(out);
    // fs.writeFile(`table-${base}.txt`,out,(err) => {
        
    //     if (err) throw err;
    //     console.log(`The file table-${base}.txt has been saved!`);
    // });
    try {
        const fileName = `table-${base}.txt`;
     fs.writeFileSync(fileName,out);   
     return Promise.resolve(fileName) // we can do this only with async in the top of the function
    } catch (error) {
        console.log(error);
        return Promise.reject(error);        
    }
}

module.exports = multiply