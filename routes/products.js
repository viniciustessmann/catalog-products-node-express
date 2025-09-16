const express = require('express')
const path = require('path');

const router = express.Router();

const basePath = path.join(__dirname, '../templates');

router.get('/', (req, res) => {

    const products = [
        {id: 1, name: 'produto A'},
        {id: 2, name: 'produto B'},
        {id: 3, name: 'produto C'},
    ];
    res.render('products', {products});
})

router.post('/', (req, res) => {
    res.send(req.body)
});

module.exports = router