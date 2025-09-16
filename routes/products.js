const express = require('express')
const path = require('path');
const mysql = require('mysql')

const router = express.Router();

const basePath = path.join(__dirname, '../templates');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'estudos'
});

conn.connect(function (err) {
    if (err) {
        console.log(err)
    }
    console.log('Connectou mysql')    
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    const query = `SELECT * FROM products WHERE id = ${id}`;
    conn.query(query, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const products = data
        res.render('products', {products});
    })
})

router.get('/', (req, res) => {
    const query = `SELECT * FROM products`;
    conn.query(query, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const products = data
        res.render('products', {products});
    })
})

router.post('/', (req, res) => {
    const name  = req.body.name
    const price = parseFloat(req.body.price)
    const query = `INSERT INTO products (name, price) VALUES ('${name}', '${price}')`
    conn.query(query, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/products')
    })
});

module.exports = router