const { User , Product } = require("../../db");


const getUserHandlerID = async ( id ) => {
    try {

 

        const user = await User.findByPk(id, {
            include: [
                {
                    model: Product,
                    attributes: ["id"]
                }
            ],
            attributes: { exclude: ["password"]}     
        })


        if (!user) {
            return { error: `the user id: ${id} not found` }
        } else {
            return user; 
        }



    } catch (error) {



        return error.message

        

    }
}

module.exports = { getUserHandlerID }