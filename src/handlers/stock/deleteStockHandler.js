const {Stock} = require('../../db')

const deleteStockHandler = async (id)=>{
    try {
        const deleteForStock = Stock.destroy({where:{id}})

        if(!deleteForStock){
            return{ error: `Cant found element num ${id}`}
        }else{
            return{message: `Product ${id} delete seccesfully`}
        }
    } catch (error) {
        return error.message
    }
}
module.exports={deleteStockHandler}