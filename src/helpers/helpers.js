const bcrypt = require("bcryptjs")

const encryptPassword = async (password) => {
    const hash = await bcrypt.hash(password, 10)
    return hash
}

const compare = async ( password, hashPassword ) => {
    return await bcrypt.compare( password, hashPassword )
}

module.exports = { encryptPassword, compare }