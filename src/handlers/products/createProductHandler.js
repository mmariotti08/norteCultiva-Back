const { Product } = require("../../db");

const createProductHandler = async ( name, brand, category, detail, price, img, status ) => {
    try {


        const createProduct = await Product.create({
            name, 
            brand, 
            category, 
            detail, 
            price, 
            img, 
            status
        });


        console.log("Producto creado:", createProduct.name);

        
    } catch (error) {

        console.error("Error al crear el producto:", error);
        throw error;


    }
}

module.exports = { createProductHandler }