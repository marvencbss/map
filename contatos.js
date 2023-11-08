const express = require('express');
const contatos = require('./contatos.json');

const srv = express();

srv.get('/contatos/json', (req, res)=>{
    res.json(contatos);
});

srv.get('/contatos/html', (req, res)=>{
    listaHTML = `<ul>`;
    for (let index=0; index < contatos.length; index++) {
        const contato = contatos[index];
        listaHTML = listaHTML + `<li>${contato.nome} - ${contato.email}</li>`
    }
    listaHTML = listaHTML + `</ul>`;
    res.send(listaHTML);
});

srv.listen(8080, ()=>{
    console.log('Pronto para enviar os contatos');
})
