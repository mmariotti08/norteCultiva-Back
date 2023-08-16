const {Stock}=require('../../db');

const getStockHandler = async ()=>{
    try {
        const stock = await Stock.findAll(
            {
                order: [['id', 'ASC']]
            }
        );
        if(stock.length>0)return stock;
        else return{error: 'Stock Not Found'};
    } catch (error) {
        return error.message;
    }
}
module.exports={getStockHandler};