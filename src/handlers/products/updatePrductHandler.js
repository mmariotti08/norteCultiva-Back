const {Product, Stock}=require('../../db')

const updatePrductHandler = async(product, stock, id)=>{
const{name,brand,category,color,detail,price,img,status} = product

try {
    const existingProduct = await Product.findByPk(id)

    if(existingProduct){
        const updateData = {};

        if(name) updateData.name = name;
        if(brand) updateData.brand = brand;
        if(category) updateData.category = category;
        if(color) updateData.color = color;
        if(detail) updateData.detail = detail;
        if(price) updateData.price = price;
        if(img) updateData.img = img;
        if(status) updateData.status = status;

        if (Object.keys(updatedData).length > 0) {
            await Product.update(updatedData, {
                where: {
                    id: id,
                },
            });
        };
        if (stock && stock.length > 0) {
            const existingStock = await Stock.findAll({
                where: {
                    productId: id,
                },
            });
        
            const existingStockMap = existingStock.reduce((map, item) => {
                map[item.quantity] = item;
                return map;
            }, {});
        
            const stockData = stock.map((item) => {
                const { quantity } = item;
        
                if (existingStockMap[quantity]) {
                    existingStockMap[quantity].quantity = quantity;
                    return existingStockMap[quantity].save();
                } else {
                    return Stock.create({ productId: id, quantity });
                }
            });
        
            await Promise.all(stockData);
        };
        
        const updatedProduct = await Product.findByPk(id, { include: [Stock] });
        return updatedProduct;
    }else{
        throw new Error("Product not found");
    }
} catch (error) {
    return  error.message
}
}

module.exports = {updatePrductHandler}