const  { Product, Stock, User } = require('../../db')

const getIdHandler = async( id ) => {
    try {


        const response = await Product.findByPk(id);
        
        if(!response){

            return{error:`the product ${id} Not Found`}
        }else{

            return response
        }


    } catch (error) {


        return error.mesage


    }
}

module.exports = { getIdHandler }