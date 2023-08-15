const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Stock", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Product",
                key: "id"
            }
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quentity: {
            type: DataTypes.INTEGER,
            
        }
    }, {
        timestamps: false,
    });
};