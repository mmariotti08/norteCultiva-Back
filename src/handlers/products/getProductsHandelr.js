const {op} = require('sequelize')
const {Product, Stock}=require('../../db')

const getProductsHandler=async(name)=>{
    try {
        if(name){
            const product = Product.findAll({
                where:{
                    name : {[Op.iLike]: `%${name}%`},
                    status:"active"
                },
                incluide: Stock
            })
            if(product.length>0){
                return product
            }else{
                return {error:'product not found'}
            }
        }else{
            const product = Product.findAll({
                where:{status:"active"},
                incluide:[{model:Stock,}]
            });
            return product
        }
    } catch (error) {
        return error.message
    }
}

module.exports ={ getProductsHandler};