var express = require('express');
var router = express.Router();
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));

const urlApiLanuz = "https://lanuz-production.up.railway.app/api/productos";




/* GET  productos page. */
router.get('/', async function(req, res, next) {

    const response = await fetch(urlApiLanuz);
    const productos = await response.json();
    console.log(productos);

        res.render('producto', { title: 'Nuestros productos..' ,lista: productos });



});


module.exports = router;
