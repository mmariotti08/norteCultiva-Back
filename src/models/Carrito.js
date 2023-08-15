const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Carrito", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Product",
                key: "id"
            }
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: "Users",
                key: "id",
            }
        },
        name: {
            type: DataTypes.STRING
        },
        main_picture_url: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        retail_price_cents: {
            type: DataTypes.INTEGER
        },
        size: {
            type: DataTypes.STRING
        },
        quentity: {
            type: DataTypes.INTEGER
        }
    },{
        timestamps: true,
    })
}