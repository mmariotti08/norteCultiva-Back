const {getIdHandler}=require('../../handlers/order/getIdHandler.js')

const getIdController  = async(req,res)=>{
    const {id}=req.params

    try {
        const response = await getIdHandler(id)

        response.error
        ? res.send(response.error)
        : res.status(200).json(response)
        
    } catch (error) {

        return error.message
    }
}

module.exports={getIdController}