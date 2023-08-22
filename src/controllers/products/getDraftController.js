const {getDraftHandler} = require('../../handlers/products/getDraftHandler.js')

const getDraftController = async(req,res)=>{
    try {
        const product = await getDraftHandler()
        product.error
        ? res.send(product.error)
        : res.status(200).json(product);
    } catch (error) {
        return error.message
    }
}

module.exports = {getDraftController}