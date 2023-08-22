const { deleteUserHandler } = require("../../handlers/userHandler/deleteUserHandler")

const deleteUserController = async ( req, res ) => {
    const { id } = req.params
    try {
        const deleteUser = await deleteUserHandlers( id )

        deleteUser.error ? res.status(400).send(deleteUser.error)
        : res.status(200).send(deleteUser.message)

    } catch (error) {
        

        return res.status(500).json({error: error.message})


    }
} 

module.exports = { deleteUserController }