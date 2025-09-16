const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn');
require('dotenv').config();

const productsRouter = require('./routes/products')

const port = process.env.PORT;
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

conn.sync().then(() => {
    app.listen(port, () => console.log(`Run on port ${port}`))
});

