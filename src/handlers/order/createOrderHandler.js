const {Product, User, Order}=require('../../db')

const createOrderHandler = async ({totalAmount, desctiption, status, payment_method, shipping_addres, delivery_date, products, userId})=>{
    try {
        const order = await Order.create({
            totalAmount, 
            desctiption, 
            status, 
            payment_method, 
            shipping_addres, 
            delivery_date,
            userId
        });

        const user =await User.findByPk(userId)

        if(user){
            await order.setUser(user);
        }

        return {order}

    } catch (error) {
        
        return error.message
    }
}

module.exports={createOrderHandler}