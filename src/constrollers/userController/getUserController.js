const getUserHandler = require("../../handlers/userHandler/getUserHandler")

const getUserController = async ( req, res ) => {
    const { name } = req.query
    try {

        const response = await getUserHandler(name)

        response.error 
        ? res.status(400).send(response.error)
        : res.json(response)

    } catch(error){

        return res.status(500).send(error.messege);
    
    }
}

module.exports = {getUserController};