/**
 * Define o mapa de comandos->funções
 */
const comandos = new Map();

comandos.set('dizer', ()=>{
    const mensagem = 'Ok. Dizer o que?';
    console.log(mensagem);
});

comandos.set('tchau', ()=>{
    console.log('Ok. Tchau!');
});

//- Recebe o comando como argumento pela linha de comando
const comando = process.argv[2];

//- Consulta o mapa de comandos
const funcaoDoComando = comandos.get(comando);

//- Executa a função encontrada
funcaoDoComando();
