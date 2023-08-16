const { getCardHandler } = require("../../handlers/carritoHandler/getCardHandler")

const getCardController = async () => {
    try {
        const response = await getCardHandler()

        response.error
        ? response.status(400).send(response.error)
        : response.status(200).json(response)

    } catch (error) {
        
        return resizeBy.status(500).send(error.message)
    }
}

module.exports = { getCardController }