const { loginUserHandler } = require("../../handlers/userHandler/loginUserHandler")

const loginUserCompare = async ( req, res ) => {
    try {


        const { mail, password } = req.body
        const response = await loginUserHandler( mail, password )
        response.error
        ? res.status(400).send(response.error) 
        : res.status(200).send(response)
        
        
    } catch (error) {

        return res.status(500).json({ Error: "error consultando datos del usuario"})

    }
}

module.exports = {loginUserCompare}