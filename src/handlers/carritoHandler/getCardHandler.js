const { Carrito } = require("../../db")

const getCarritoHandler = async (name) => {
    try {
        const findCard = await Carrito.findAll()

        if(findCard){
            return findCard
        } else {
            return { error: "card not found"}
        }

    } catch (error) {
        return { error: error.message}
    }
}

module.exports = { getCarritoHandler }
