const { Carrito, User, Product } = require("../../db");

const createCardHandler = async ( {/*productId, id_user,*/ name, main_picture_url, retail_price_cents, quantity} ) => {
    try {
        //const id = id_user
        //const findUser = await User.findOne({ where: { id } })
        //const findProduct = await Product.findByPk(productId)

        console.log(main_picture_url)

        if( /*findUser && findProduct*/ true ) {


            const createProduct = await Carrito.create(
                {
                    //productId: findProduct.id, 
                    //userId: findProduct.id, 
                    name, 
                    main_picture_url, 
                    retail_price_cents, 
                    quantity
                }
            )

            if ( createProduct ) {
                return createProduct
            } else {
                return { error: "Producto no guardado"}
            }


        }


    } catch (error) {


        return { error : error.message }



    }
}

module.exports = { createCardHandler }