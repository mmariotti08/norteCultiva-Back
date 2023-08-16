const {createProductHandler} = require('../../handlers/products/createProductHandler')

const createProductController = async(req,res)=>{
    try {
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

        if(!name || !brand || !category || !color || !detail || !price || !img || !status || !stock.length) throw Error("missing data for registration")

        const prduct_stock = await createProductHandler(name, brand, category, color, detail, price, img, status, stock);

        prduct_stock.error
        ? res.status(400).send(prduct_stock.error)
        : res.status(200).json(prduct_stock)
    } catch (error) {
        return error.message
    }
}
module.exports={createProductController}