const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Carrito", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        //productId: {
        //    type: DataTypes.INTEGER,
        //    allowNull: true,
        //    references: {
        //        model: "Product",
        //        key: "id"
        //    }
        //},
        userId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: "Users",
                key: "id",
            }
        },
        name: {
            type: DataTypes.STRING
        },
        main_picture_url: {
            type: DataTypes.STRING,
        },
        retail_price_cents: {
            type: DataTypes.INTEGER
        },
        quentity: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: true,
    })
}