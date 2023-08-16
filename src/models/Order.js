const {DataTypes, Sequelize}=require('sequelize')

module.exports=(sequelize)=>{
    sequelize.define(
        "Order",{
            id:{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            totalAmount:{
                type: DataTypes.INTEGER
            },
            description: {
                type: DataTypes.INTEGER
            },
            status: {
                type:DataTypes.INTEGER
            },
            payment_method: {
                type: DataTypes.STRING,
              },
            shipping_address: {
                type: DataTypes.STRING,
              },
            delivery_date: {
                type: DataTypes.DATE,
              },
            },
            {
              timestamps: true,
            }

        
    )}