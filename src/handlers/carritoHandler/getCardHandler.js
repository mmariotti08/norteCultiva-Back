const { Carrito } = require("../../db")

const getCardHandler = async (name) => {
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

module.exports = { getCardHandler }
