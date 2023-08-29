const { createCardHandler } = require("../../handlers/carritoHandler/createCardHandler")

const createCardController = async ( req, res ) => {
    try {
        const data = req.body
        const cleanData = {
            productId: data.item.id,
            id_user: data.user.id,
            name: data.item.name,
            main_picture_url: data.item.main_picture_url,
            retail_price_cents: data.item.retail_price_cents,
            size: data.item.size,
            quantity: data.item.quantity
        }
        const { productId, id_user, name, main_picture_url, retail_price_cents, size, quantity } = cleanData
        const response = await createCardHandler(
            { 
                productId,
                id_user,
                name,
                main_picture_url,
                retail_price_cents,
                size,
                quantity
            }
        )

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response)

    } catch (error) {

        return res.status(500).json({ error: error.message })

    }
}

module.exports = { createCardController }