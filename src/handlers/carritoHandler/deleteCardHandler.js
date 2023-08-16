const { Carrito } = require("../../db")

const deleteCardHandler = async ( id ) => {
    try {
        const deleteCard = await Carrito.destroy( { where: { id } })



        if ( deleteCard.error ) {

            return { error: `No se pudo encontrar el producto: ${ id }`}

        } else {

            return { message: `Producto eliminado correctamente`}
            
        }



    } catch (error) {



        return { error: error.message }



    }
}

module.exports = { deleteCardHandler }