const {getProductsHandler}=require('../../handlers/products/getProductsHandelr')


const getProductsController = async ( req, res ) => {
    const {name} = req.query
    try {


        const product = await getProductsHandler(name);

        product.error
        ? res.status(400).send(product.error)
        : res.json(product)


    } catch (error) {

        return res.status(500).send(error.message);

    }
}

module.exports={getProductsController}