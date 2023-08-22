const { User } = require("../../db")


const userUpdHandlerAdm = async ( administrator, id ) => {
    try {
        


        const updateUser = await User.findByPk(id)

        if(!updateUser) throw Error (`id del usuario: ${id} no encontrado`)

        await User.update({administrator: administrator}, {
            where: {
                id: id
            }
        })

        return find = await User.findByPk(id)



    } catch (error) {

        return error.message

    }
}

module.exports = { userUpdHandlerAdm }