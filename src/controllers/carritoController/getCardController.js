const { getCardHandler } = require("../../handlers/carritoHandler/getCardHandler")

const getCardController = async ( req, res ) => {
    try {
        const response = await getCardHandler()

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response)

    } catch (error) {
        
        return res.status(500).send(error.message)
    }
}

module.exports = { getCardController }