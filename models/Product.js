const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Product = db.define('Product' , {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = Product