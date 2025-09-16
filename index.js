const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql');

const productsRouter = require('./routes/products')

const port = 3000;
const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/products', productsRouter);


app.listen(port, () => console.log(`Run on port ${port}`))