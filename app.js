//required
const { crearArchivo, listarTabla } = require('./tabmodulos/multiplicar');
//const argv = require('./config/yargs').argv;
const argv = require('./config/yargs').argv;
const color = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Arhivo creado:' + `${archivo}`.green.bgBlue))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no existe');
}
//const fs = require('express') ;
//const fs = require(./fs');  locales


//let base = 'multiplica';
//console.log(process.argv);

//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(`<<< base = ${argv.base} >>> <<< limite = ${argv.limite} >>>`);
//console.log(argv);
//console.log(argv2);
//console.log(base);
/*
multiplicar.crearArchivo(base)
    .then(archivo => console.log(`Arhivo creado: ${archivo}`))
    .catch(error => console.log(error));
*/