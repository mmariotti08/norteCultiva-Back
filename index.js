const server = require("./src/server");
const axios = require("axios");
const { sequelize } = require("./src/db.js");
const { PORT } = process.env;
const { conn } = require("./src/db.js");

conn.sync({ force: false })
    // .then(async()=>{
    //     const response = await axios.get("http://localhost:5000/products")
    //     const productData = response.data.map(product =>{
    //         return{
    //             name:product.name,
    //             brand:product.brand,
    //             category:product.category,
    //             color:product.color,
    //             detail:product.detail,
    //             price:product.price,
    //             img: Array.isArray(product.img) ? product.img : [product.img],
    //             status:product.status
    //         }
    //     })
    //     await conn.models.Product.bulkCreate(productData)
    // })
    

    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));