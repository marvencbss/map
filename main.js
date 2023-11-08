const express = require('express');
const srv = express();

srv.listen(3030, servidorAguardando);

srv.get('/info', (req, res)=>{
    info = {
        nome: 'servidor do mestre',
        versao: 'v1.0.01.21',
        licenca: 'MIT',
    }
    res.json(info);
});
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
        <link rel="stylesheet" href="https://unpkg.com/mvp.css"> 
        <title>Pagina</title>
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
