const { User } = require("../../db")

const userUpdateHandler = async ( active, id ) => {
    try {

        const user = await User.findByPk(id)
        
        if (!user) throw Error (`id del usuario: ${id} no encontrado`)

        await User.update({active: active}, {
            where: {
                id: id
            }
        })
        return find = await User.findByPk(id)

    } catch (error) {
        
        return error.message

    }
}

module.exports = { userUpdateHandler }