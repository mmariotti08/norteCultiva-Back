const {createUserHandler }= require("../../handlers/userHandler/createUserHandler");


const createUserController = async ( req, res ) => {

    try {


        const { name, mail, password, address } = req.body

        if( !mail ) throw Error("Necesitamos una direccion de email para completar el registro")

       

        const response = await createUserHandler({ name, mail, password, address})

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response)


    } catch (error) {
        

        return res.status(500).json({error : error.message})

        
    }
}

module.exports = {createUserController}