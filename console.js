const rl = require('readline-sync');
const umMapa = new Map();

umMapa.set(`Maria`, `Oi Maria`);
umMapa.set(`João`, `Oi João`);
umMapa.set(`Marven`, `Oi Marven`);

let nome = umMapa[0];
const recadoAoNome = umMapa;

let recado = `${nome}, você tem um recado: ${umMapa}`

const inicio = rl.question('nome: ');

function temRecado(inicio) {
    umMapa.get(inicio)
}

if(temRecado = true) {
    rl.question('nome: ');
} else {
    return 'não há recados.'
};

temRecado(inicio);
