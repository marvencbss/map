const express = require('express');
const sqlite3 = require('sqlite3');
const srv = express();
const configs = require('./package.json');
srv.use(require('body-parser').urlencoded({ extended: false }));
srv.listen(3030, servidorAguardando);

srv.get('/', (req, res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>bem vindo ao sitezao</title>
    </head>
    <body>
        este é o melhor site de toda a história da humanidade<br><br><br><br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sint porro officia explicabo aliquam quia perspiciatis maiores necessitatibus ea exercitationem quaerat nihil reprehenderit iste facere optio delectus asperiores, illum provident!<br>
        Mussum Ipsum, cacilds vidis litro abertis.  Nulla id gravida magna, ut semper sapien. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga. Negão é teu passadis, eu sou faxa pretis.
    
    <br>Leite de capivaris, leite de mula manquis sem cabeça. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Bota 1 metro de cachacis aí pra viagem! Delegadis gente finis, bibendum egestas augue arcu ut est.
    
    <br>Nulla id gravida magna, ut semper sapien. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis! A ordem dos tratores não altera o pão duris. Delegadis gente finis, bibendum egestas augue arcu ut est.
    
    <br>Quem num gosta di mim que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Atirei o pau no gatis, per gatis num morreus. Interagi no mé, cursus quis, vehicula ac nisi.
    
    <br>Cevadis im ampola pa arma uma pindureta. Leite de capivaris, leite de mula manquis sem cabeça. Diuretics paradis num copo é motivis de denguis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
    
    <br>Interagi no mé, cursus quis, vehicula ac nisi. Nulla id gravida magna, ut semper sapien. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é.
    
    <br>Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Diuretics paradis num copo é motivis de denguis. Leite de capivaris, leite de mula manquis sem cabeça.
    
    <br>Segunda-feiris nun dá, eu vô me pirulitá! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Diuretics paradis num copo é motivis de denguis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
    
    <br>Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss deixa as pessoas mais interessantis. A ordem dos tratores não altera o pão duris.
    
    <br>Casamentiss faiz malandris se pirulitá. Ainda é segunda-feris e já tô sem paciêncis! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. A ordem dos tratores não altera o pão duris.
    
    <br>Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim. Segunda-feiris nun dá, eu vô me pirulitá! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
        
    </body>
    </html>`)
});

srv.post('/registrar', (req, res)=>{
    console.log(req.body.nome);
    console.log(req.body.email);
    console.log(req.body.msg);
    res.send(`Um recado recebido: Para ${req.body.nome}, ${req.body.email}
     Recado: ${req.body.msg}`);
    });

srv.get('/deixaroi/:nome/:msg' , (req, res)=>{
    const db = new sqlite3.Database('mensagens.db');
    const sql = `INSERT INTO nome VALUES(?, ?)`;
    db.run(sql, [req.params.nome, req.params.msg], (resultado, erro)=>{
        if(erro) {
            res.json({
                status: 'erro',
                msg: erro
            })
        } else {
            res.json({
                status: 'sucesso',
                msg: 'Mensagem enviada'
            })
        }
    });
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
