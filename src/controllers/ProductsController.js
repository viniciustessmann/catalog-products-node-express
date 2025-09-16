const pool = require('../../db/conn')

class UserController {
    
  getProducts = (req, res) =>{
    const query = `SELECT * FROM products`;
      pool.query(query, function (err, products) {
          if (err) {
              console.log(err)
              return
          }
          res.render('products', {products});
      })
    }

  createProduct = (req, res) => {
      const name  = req.body.name
      const price = parseFloat(req.body.price)
      const sql = `INSERT INTO products (??, ??) VALUES (?, ?)`

      const data = ['name', 'price', name, price]

      pool.query(sql, data, function (err) {
          if (err) {
              console.log(err)
          }
          res.redirect('/products')
      })
  };
}

module.exports = new UserController()