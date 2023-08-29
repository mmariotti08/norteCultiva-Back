const {Product, Stock} = require('../../db')

const createProductHandler = async ({name, brand, category, color, detail, price, img, status, stock})=>{
    try {
        const createProduct = await Product.create({
            name, 
            brand, 
            category, 
            color, 
            detail, 
            price, 
            img, 
            status
        })

        const createStock = stock.map(stock=>{
            return{
                productId: createProduct.id,
				quantity: stock.quantity
            }
        })

        await Stock.Create(createStock);

        return createProduct
    } catch (error) {
        return error.message;
    }
}

module.exports={createProductHandler}