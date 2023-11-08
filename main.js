const express = require('express');
const srv = express();
const configs = require('./package.json');

srv.listen(3030, servidorAguardando);

srv.get('/dizoi/:nome', (req, res)=>{
    res.send(`oi ${req.params.nome}`)
});

srv.get('/dizoi/:nome/x/vezes', (req, res)=>{
    let ois ='';
    for(i=0; i<req.params.vezes; i++){
        ois = ois + res.send(`oi ${req.params.nome}`)
    }
});

srv.get('/info', (req, res)=>{
    info = {
        nome: configs.name,
        versao: configs.version,
        autor: configs.author
    }   
        res.json(info);
    }
);
srv.get('/json', getRootJSON);
srv.get('/html', getRootHTML);

function getRootJSON(pedido, resposta) {
    homePage = {
        titulo: 'servidor2',
        subtitulo: 'Home Page',
        texto: 'Cacildissssssss bebidis lorem ipsusis bonitis',
    }
    resposta.json(homePage);
}

// function getInfo(pedido, resposta) {
//     info = {
//         nome: 'servidor do mestre',
//         versao: 'v1.0.01.21',
//         licenca: 'MIT',
//     }
//     resposta.json(info);
// }

function getRootHTML(pedido, resposta) {
    const homepage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.min.css"> 
        <title>se vc ta lendo isso vc e mestre</title>
    </head>
    <body>
    <header>o titulo dos mestres</header>
        este é o melhor texto em toda a história do planeta
    </body>
    </html>`
    resposta.send(homepage);
};

function servidorAguardando() {
    console.log('aguardando conexões...');
}
