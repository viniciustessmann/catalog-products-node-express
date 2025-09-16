const express = require('express');
const UserController = require('../src/controllers/ProductsController');
const router = express.Router();


router.get('/', UserController.getProducts)
router.post('/', UserController.createProduct);

module.exports = router