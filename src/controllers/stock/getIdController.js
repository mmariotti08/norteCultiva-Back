const {getIdHandler}=require('../../handlers/stock/getIdHandler.js')

const getIdController = async(req, res)=>{
    try {
        const {id} = req.params
        const stock = await getIdHandler(id);

        return stock.length>0
        ? res.status(200).json(stock)
        : res.send(stock.error)
    } catch (error) {
        return error.message;
    }
}
module.exports={getIdController}