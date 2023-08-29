const { DataTypes } = require ("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    sequelize.define( "User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
       
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        },
        administrator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        address: {
            type: DataTypes.JSON
        },
       
    }, {
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {
                if (user.changed("password")) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt); 
                }
            }
        },
        timestamps: true
    })
}