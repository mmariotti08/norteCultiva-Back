const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Carrito", {
        id: {},
        productId: {},
        userId: {},
        name: {},
        main_picture_url: {},
        retail_price_cents: {},
        size: {},
        quentity: {}
    },{
        timestamps: true,
    })
}