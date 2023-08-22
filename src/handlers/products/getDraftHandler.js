const {Product}=require('../../db')

const getDraftHandler = async ()=>{
    try {
        const response = await Product.findAll({
            where:{status:'draft'}
        });

        return response
    } catch (error) {
        return error.message
    }
}

module.exports={getDraftHandler}