const {Order}=require('../../db')

const getIdHandler = async(id)=>{
    try {
        const order = await Order.findbyPk(id)

        order.error
        ? {error: `The Order ${id} Not Found`}
        : order;
    } catch (error) {
        
        return error.message
    }
}

module.exports={getIdHandler}