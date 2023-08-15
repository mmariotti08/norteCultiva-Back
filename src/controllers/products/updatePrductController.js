const{updatePrductHandler}=require('../../handlers/products/updatePrductHandler.js')

const updatePrductController = async(req,res)=>{
    const{
        product:{
            name,
            brand,
            category,
            color,
            detail,
            price,
            img,
            status,
        },
        stock
    }=req.body

    const{id}=req.params

    try {
        const update = await updatePrductHandler({ name,brand,category,color,detail,price,img,status,}, stock, id);

        update.error
        ? res.status(400).send(update.error)
        : res.status(200).json(update)
    } catch (error) {
        
        return error.message
    }
}
module.exports={updatePrductController}