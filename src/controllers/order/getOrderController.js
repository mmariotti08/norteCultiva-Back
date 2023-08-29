const {getOrderHandler}=require('../../handlers/order/getOrderHandler.js')

const getOrderController = async(req,res)=>{
    

    try {
        const response = await getOrderHandler()

        response.error
        ? res.send(response.error)
        : res.status(200).json(response)

    } catch (error) {
        
        return error.message
    }
}

module.exports={getOrderController}