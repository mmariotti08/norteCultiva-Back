const { User } = require("../../db")

const deleteUserHandler = async ( id ) => {
    try {


        const response = await User.destroy({ where: { id } })

        if(!response) {

            return {error: `No se encontro el elemento numero ${ id }`}

        } else {

            return { message: `Usuario borrado exitosamente`}

        }


    } catch (error) {
        return error.message
    }
}

module.exports = { deleteUserHandler }