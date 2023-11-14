const express = require('express');
const srv = express();
srv.use(require('body-parser').urlencoded({ extended: false }));

srv.get('/', (req, res)=>{
    res.send('Oi, oi, oi!!!');
});

srv.post('/registrar', (req, res)=>{
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.msg);
    res.send(`
    Um recado recebido: Para ${req.body.nome}, ${req.body.email}
     Recado: ${req.body.msg}`);
});
srv.listen(3030);
