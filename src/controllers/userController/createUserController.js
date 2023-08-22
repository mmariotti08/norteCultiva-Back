const createUserHandler = require("../../handlers/userHandler/createUserHandler.js");
const encryptPassword = require("../../helpers/helpers.js");

const createUserController = async ( req, res ) => {

    try {


        const { name, mail, password, phone, last_name, address, idUser } = req.body

        if( !mail ) throw Error("Necesitamos una direccion de email para completar el registro")

        if( password ) {
            await encryptPassword(password)
        }

        const response = await createUserHandler({ name, mail, password, phone, last_name, address, idUser})

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response)


    } catch (error) {
        

        return res.status(500).json({error : error.message})

        
    }
}

module.exports = {createUserController}