const umMapa = new Map();

umMapa.set(`Maria`, `Oi Maria`);
umMapa.set(`João`, `Oi João`);
umMapa.set(`Marven`, `Oi Marven`);

const nome = umMapa[0];
const recado = umMapa;

function getRecado(nome) {
    return `${nome}, você tem um recado: ${umMapa.get(nome)}`;
}
