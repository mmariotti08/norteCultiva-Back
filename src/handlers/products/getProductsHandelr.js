const {Op} = require('sequelize')
const { Product }=require('../../db')

const getProductsHandler = async ( name ) => {
    try {


        if( name ) {

            const product = Product.findAll({
                where:{
                    name : {[Op.iLike]: `%${name}%`},
                },
            })

            if( product.length > 0 ) {
                return product
            }else{
                return {error:'product not found'}
            }

        } else {

            const product = Product.findAll({
                where: { status:"active" }
            });

            return product

        }


    } catch (error) {


        return error.message


    }
}

module.exports ={ getProductsHandler};