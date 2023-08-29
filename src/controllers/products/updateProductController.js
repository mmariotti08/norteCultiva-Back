const{updateProductHandler}=require('../../handlers/products/updateProductHandler.js')

const updateProductController = async( req, res ) => {
    
    const product = {
            name,
            brand,
            category,
            detail,
            price,
            img,
            status,
        }
     = req.body

    console.log(product);

    const{ id } = req.params

    try {


        const update = await updateProductHandler({ name, brand, category, detail, price, img, status}, id);

        update.error
        ? res.status(400).send(update.error)
        : res.status(200).json(update)


    } catch (error) {
        

        return error.message


    }
}

module.exports = { updateProductController }