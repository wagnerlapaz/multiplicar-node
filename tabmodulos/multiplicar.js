//required
const fs = require('fs');
//const fs = require('express') ;
//const fs = require(./fs');  locales

let crearArchivo = ((base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`"${base}" no es un numero`);
            return;
        }

        let data = '  ';

        for (let x = 1; x <= limite; x++) {
            data += `${base} * ${x} = ${base*x}\n`;

        }


        fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tablas/tabla-del-${base}.txt`, );
        });
    });

});

let listarTabla = ((base, limite = 10) => {

    const color = require('colors');

    console.log('*************************'.red);
    console.log(`tabla del ${base}`.green);
    console.log('*************************'.red);


    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base*x}\n`);

    }

});


module.exports = {
    crearArchivo,
    listarTabla
}