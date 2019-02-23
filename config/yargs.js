let opts = {
    base: {
        demand: true,
        default: 10,
        alias: 'b'
    },
    limite: {
        default: 20,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Mostrar tabla de mulplicar', opts)
    .command('crear', 'crear tabla de mulplicar en un archivo', opts)
    .help()
    .argv;

module.exports = {
    argv
}