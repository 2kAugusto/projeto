const api = require('./views/assets/api')

// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', async function (req, res) {
    var dados = await api.foto("bruno-suntak")
    //console.log(dados.data.login)

    res.render('pages/index', {
        dados: dados
    });
});

// about page
app.get('/marcelo', async function (req, res) {
    var dados = await api.foto("marcelobem")
    //console.log(dados.data.login)

    res.render('pages/index', {
        dados: dados
    });
});
app.get('/luis', async function (req, res) {
    var dados = await api.foto("LuisGustavoSilva")
    //console.log(dados.data.login)

    res.render('pages/index', {
        dados: dados
    });
});

app.listen(8080);
console.log('8080 is the magic port');