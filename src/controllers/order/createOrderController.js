const {createOrderHandler}=require('../../handlers/order/createOrderHandler.js')

const createOrderController = async(req,res)=>{

    let {totalAmount, desctiption, status, payment_method, shipping_addres, delivery_date, products, userId}=req.body

    try {
        const response = await createOrderHandler({totalAmount, desctiption, status, payment_method, shipping_addres, delivery_date, products, userId})

        response.error
        ? res.send(response.error)
        : res.status(200).json(response)

    } catch (error) {
        return error.message
    }
}

module.exports={createOrderController}