const { userUpdateHandler } = require("../../handlers/userHandler/userUpdateHandler")

const updateAdmController = async ( req, res ) => {
    const { active } = req.body
    const { id } = req.params
    try {


        const response = await userUpdateHandler( active, id )
        response.error
        ? res.status(400).send(response.error)
        : res.json(response)


    } catch (error) {
        

        return res.status(500).json({ error: "Usuario no actualizado"})


    }
}

module.exports = { updateAdmController }