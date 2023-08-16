const jwt = require("jsonwebtoken")
require("dotenv").config();
const { JWT_SECRET } = process.env

const tokenSing = async (user) => {
    return jwt.sign(
        {
            id: user.id,
            mail: user.mail,
            name: user.name,
            administrator: user.administrator,
            active: user.active
        },
        JWT_SECRET,
        {
            expiresIn: "1h",
        }
    )
}

const verifyToken = async ( token ) => {
    try {

        return jwt.verify(token, JWT_SECRET)

    } catch ( error ) {

        return null

    }
}

module.exports = { tokenSing, verifyToken } 