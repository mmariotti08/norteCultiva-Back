const { deleteCardHandler } = require("../../handlers/carritoHandler/deleteCardHandler")

const deleteCardController = async ( req, res ) => {
    try {
        const { id } = req.params
        const response = await deleteCardHandler( id )


        
        response.error
        ? res.status(400).send(response.error)
        : res.status(200).send(response.message)



    } catch (error) {
        


        return res.status(500).send(error.message)



    }
}

module.exports = { deleteCardController }