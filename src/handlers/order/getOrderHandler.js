const {Order}=require('../../db')

const getOrderHandler = async(userId)=>{
    try {
        const orders = await Order.findAll({
            include: OrderProduct
          });
          if (orders.length>0){
            return orders;
          }else{
            return {error: 'there is no created order'}
          }
    
    } catch (error) {
        return error.message
    }
}

module.exports={getOrderHandler}