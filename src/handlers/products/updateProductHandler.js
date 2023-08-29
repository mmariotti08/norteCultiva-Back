const { Product } = require('../../db');

const updateProductHandler = async( product, id ) => {
    const{ 
        name, 
        brand, 
        category, 
        detail,
        price, 
        img, 
        status 
    } = product
    
    try {
    
    
        const existingProduct = await Product.findByPk(id)
    
        if( existingProduct ) {
            const updatedData = {};
    
            if(name) updatedData.name = name;
            if(brand) updatedData.brand = brand;
            if(category) updatedData.category = category;
            if(detail) updatedData.detail = detail;
            if(price) updatedData.price = price;
            if(img) updatedData.img = img;
            if(status) updatedData.status = status;
    
            if (Object.keys(updatedData).length > 0) {
                await Product.update(updatedData, {
                    where: {
                        id: id,
                    },
                });
            };
        
            const updatedProduct = await Product.findByPk( id );
    
            return updatedProduct;
    
        }else{
    
            throw new Error("Product not found");
    
        }
    
    
    } catch (error) {
    
    
        return  error.message
    
    
    }
}

module.exports = {updateProductHandler}