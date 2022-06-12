 const fs = require('fs');

const multiply = ( base ) => {
    console.clear();
    console.log(` =================================== `);
    console.log(` ======== Tabla del ${base} ======== `);
    console.log(` =================================== `);

    let out = '';
    for (let index = 0; index < 10; index++) {
        out += `${base} * ${index} = ${base * index}\n`;     
    }
    console.log(out);
    // fs.writeFile(`table-${base}.txt`,out,(err) => {
        
    //     if (err) throw err;
    //     console.log(`The file table-${base}.txt has been saved!`);
    // });
    try {
     fs.writeFileSync(`table-${base}.txt`,out);   
    } catch (error) {
        console.log(error);
    }
}

multiply(5)