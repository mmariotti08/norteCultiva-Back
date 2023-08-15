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
				model: "Products",
				key: "id",
			},
		},
        quentity: {
            type: DataTypes.INTEGER,
            
        }
    }, {
        timestamps: false,
    });
};