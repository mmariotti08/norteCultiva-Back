const {Stock} = require('../../db');

const getIdHandler = async(id)=>{
    try {
        const stock = await Stock.findAll({
            where:{
                productId:id,
            },
            order:[['id', 'ASC']]
        });

        if(stock.length>0)return stock;
        else return {error: 'Stock Not Found'}
    } catch (error) {
        return error.message;
    }
}
module.exports={getIdHandler}