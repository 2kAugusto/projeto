const api = require('./views/assets/api')

// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page

/**
 * Rota para consultar perfil no github
 */
app.get('/:username', async function (req, res) {

    var username = req.params.username;

    try {
        var dados = await api.foto(username) 
        } catch (error) {
            //console.log(error)
        }

        // res.json (dados)
    
        res.render('pages/index', {
            dados: dados
        });
});


app.listen(8080);
console.log('8080 is the magic port');