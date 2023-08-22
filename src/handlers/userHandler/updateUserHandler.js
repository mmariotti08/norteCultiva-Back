const { User } = require("../../db")

const updateUserHandler = async ( name, phone, last_name, address, active, administrator, id ) => {
    try {



        const user = await User.findByPk(id)

        if(!user) throw Error (`nombre de usuario: ${name} no existe`)

        const updatedData = {}

        if ( name ) updatedData.name = name
        if ( phone ) updatedData.phone = phone
        if ( last_name ) updatedData.last_name = last_name
        if ( address ) updatedData.address = address
        if ( active !== undefined ) updatedData.active = active
        if ( administrator !== undefined ) updatedData.administrator = administrator

        if(Object.keys(updatedData).lenght > 0 ) {
            await User.update( updatedData, {
                where: {
                    id: id
                }
            })
        }

        const updatedUser = await User.findByPk( id, {
            attributes: { exclude: ["password"] }
        })

        return updatedUser


        
    } catch (error) {
        

        return error.message


    }
}

module.exports = { updateUserHandler }