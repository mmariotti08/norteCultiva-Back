const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Stock", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       
        quentity: {
            type: DataTypes.INTEGER,
            
        }
    }, {
        timestamps: false,
    });
};