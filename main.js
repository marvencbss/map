const express = require('express');
const srv = express();

srv.listen(3030, servidorAguardando);
srv.get('/', getInfo);

function getRootJSON(pedido, resposta) {
    homePage = {
        titulo: 'servidor2',
        subtitulo: 'Home Page',
        texto: 'Cacildissssssss bebidis lorem ipsusis bonitis',
    }
    resposta.json(homePage);
}

function getInfo(pedido, resposta) {
    home = {
        nome: 'servidor do mestre',
        versao: 'v1.0.01.21',
        licenca: 'MIT',
    }
    resposta.json(home);
}

function getRootHTML(pedido, resposta) {
    const homepage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pagina</title>
    </head>
    <body>
        este é o melhor texto da história do planeta
    </body>
    </html>`
    resposta.send(homepage);
};

function servidorAguardando() {
    console.log('aguardando conexões...');
}
