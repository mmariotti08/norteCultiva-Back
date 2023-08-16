const{deleteStockHandler}=require('../../handlers/stock/deleteStockHandler.js')

const deleteStockController = async (req, res)=>{
const {id} = req.body
try {
    const response = deleteStockHandler(id)

    response.error
    ? res.status(400).send(response.error)
    : res.status(200).json(response)
    
} catch (error) {
    return error.message
}
}

module.exports={deleteStockController}