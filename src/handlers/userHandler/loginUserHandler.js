const { User } = require("../../db")
const { tokenSing } = require("../../helpers/token");
const { compare } = require("../../helpers/helpers");

const loginUserHandler = async ( mail, password ) => {
    try {
        const userLogin = await User.findOne({
            where: { mail: mail }
        })

        if (!userLogin) throw Error ( `mail: ${mail} not found`)
        if(userLogin.active === false) throw Error(`Usuario: ${mail} baneado, contacto to independentdev00@gmail.com`)

        const checkPassword = await compare ( password, userLogin.password )

        const tokenSession = await tokenSing ( userLogin )

        if ( checkPassword ) {
            const cleanUser = {
                id: userLogin.id,
                mail: userLogin.mail,
                name: userLogin.name,
                active: userLogin.active,
                administrator: userLogin.administrator
            }

            return ({
                data: cleanUser,
                tokenSession
            })

        } else {
            return { error: `el mail ${mail} y la contraseña ${password} do not match`}
        }
    } catch (error) {


        return error.message


    }
}

module.exports = {loginUserHandler}