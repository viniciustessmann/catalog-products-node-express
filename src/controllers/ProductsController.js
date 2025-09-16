const pool = require('../../db/conn')
const Product = require('../../models/Product')

class UserController {
    
  getProducts = async (req, res) =>{
      const products = await Product.findAll({raw: true});
      res.render('products', {products});
    }

  createProduct = async (req, res) => {
      const name  = req.body.name
      const price = parseFloat(req.body.price)
      await Product.create({name, price});
      res.redirect('/products')
  };
}

module.exports = new UserController()