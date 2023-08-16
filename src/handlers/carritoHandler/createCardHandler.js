const { Carrito, User, Product } = require("../../db");

const createCardHandler = async ( {productId, id_user, name, main_picture_url, retail_price_cents, size, quantity} ) => {
    try {
        const id = id_user        
        const findUser = await User.findOne({ where: { id } })
        const findProduct = await Product.findByPk(productId)



        if( findUser && findProduct ) {


            const createProduct = await Carrito.create(
                {
                    productId: findProduct.id, 
                    userId: findProduct.id, 
                    name, 
                    main_picture_url, 
                    retail_price_cents, 
                    size, 
                    quantity
                }
            )

            if ( createProduct ) {
                return createProduct
            } else {
                return { error: "Producto no guardado"}
            }


        } else {


            return { error: "Usuario no encontrado"}

            
        }



    } catch (error) {



        return { error : error.message }



    }
}

module.exports = { createCardHandler }