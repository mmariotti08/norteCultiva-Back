const { getUserHandlerID } = require("../../handlers/userHandler/getUserHandlerID");

const getUserControllerID = async ( req, res ) => {
    const { id } = req.params
    try {
        const response = await getUserHandlerID(id)

        response.error 
        ? res.status(400).send(response.error)
        : res.json(response)

    } catch (error) {

        return res.status(500).json({error: "Error getting user"})

    }
}

module.exports = { getUserControllerID}