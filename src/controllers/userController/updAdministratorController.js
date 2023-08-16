const { userUpdHandlerAdm } = require("../../handlers/userHandler/userUpdHandlersAdm")

const updAdministratorController = async ( req, res ) => {
    const { administrator } = req.body
    const { id } = req.params
    try {



        const response = await userUpdHandlerAdm( administrator, id )

        response.error 
        ? res.status(400).send(response.error) 
        : res.json(response)



    } catch (error) {



        return res.status(500).json({ error: "Usuario no actualizado" })



    }
}

module.exports = { updAdministratorController } 