const express = require('express')
const sqlite3 = require('sqlite3')

const srv = express()

srv.get('/frases', (req, res)=>{
    const db = new sqlite3.Database(('frases.db'));
    const sql = 'SELECT frase, autor FROM frases';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.json(linhas);
    })
});

srv.get('/frases/n/:numero', (req, res)=>{
    const db = new sqlite3.Database(('frases.db'));
    const sql = 'SELECT frase, autor FROM frases LIMIT ?';

    db.all(sql, [], (erro, linhas) =>{
        if(erro) throw erro;
        res.json(linhas);
})
})

srv.listen(3030, ()=>{
    console.log("Aguardando conexões...");
});
