const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Stock", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            
        }
    }, {
        timestamps: false,
    });
};