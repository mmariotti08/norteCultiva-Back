const {updateStockHandler}=require('../../handlers/stock/updateStockHandler.js')

const updateStockController = async(req,res)=>{
    try {
        const{products}=req.body
        if(products.length===0) throw Error ('No product to update quantity')

        const response = await updateStockHandler(products)

        response.error ? res.status(400).send(response.error) : res.status(200).json(response)
    
    } catch (error) {
        return error.message
    }
}

module.exports={updateStockController}