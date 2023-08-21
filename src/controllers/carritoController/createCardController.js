const { createCardHandler } = require("../../handlers/carritoHandler/createCardHandler")

const createCardController = async ( req, res ) => {
    try {
        const data = req.body
        const cleanData = 
        {
            //productId: data.productId,
            //id_user: data.id_user,
            name: data.name,
            main_picture_url: data.main_picture_url,
            retail_price_cents: data.retail_price_cents,
            quantity: data.quantity
        }

        const { /*productId, id_user,*/ name, main_picture_url, retail_price_cents, quantity } = cleanData
        const response = await createCardHandler(
            { 
                //productId,
                //id_user,
                name,
                main_picture_url,
                retail_price_cents,
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