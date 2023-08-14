const { DataTypes,  } = require("sequelize")

module.exports = (sequelize)=>{
    sequelize.define('Product', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement:true,
        },
        name:{
            type: DataTypes.STRING,
            unique: true 
        },
        brand:{
            type:DataTypes.STRING
        },
        category:{
            type:DataTypes.STRING

        },
        color:{
            type:DataTypes.STRING
        },
        detail:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        img:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        },
        status:{
            type: DataTypes.STRING
        }


    },{
		timestamps: false,
	});
};