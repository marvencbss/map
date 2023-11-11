const express = require('express');
const sqlite3 = require('sqlite3');
const srv = express();
const configs = require('./package.json');
srv.listen(3030, servidorAguardando);

srv.get('/deixaroi/:nome/:msg' , (req, res)=>{
    const db = new sqlite3.Database('mensagens.db');
    const sql = `INSERT INTO mensagens VALUES(?, ?)`;
    db.run(sql, [req.params.nome, req.params.msg], (resultado, erro)=>{
        if(erro) {
            res.json({
                status: 'erro',
                msg: erro
            })
        } else {
            res.json({
                status: 'sucesso',
                msg: res
            })
        }
    });

    res.json({status: 'ok', msg: 'recado enviado.'})
})


srv.get('/dizoi/:nome', (req, res)=>{
    const db = new sqlite3.Database('mensagens.db');
    const sql = 'SELECT nome,msg FROM mensagens WHERE nome=?';

    db.get(sql, [req.params.nome], (erro, linhas)=>{
        if(erro) throw erro;
        res.json(linhas);
    });
});


srv.get('cep/:cep', (req, res)=>{
    res.json(ceps[req.params.cep]);
});

srv.get('/dizoi/:nome/x/:vezes', (req, res)=>{
    let ois = '<ul>';
    for(i=1; i<req.params.vezes; i++){
        ois = ois + `<li>${i} - oi ${req.params.nome}</li>`
    }
    ois = ois + `</ul>`;
    res.send(ois);
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
