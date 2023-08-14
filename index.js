const server = require("./src/server");
const axios = require("axios");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

conn.sync({ force: true })
    .then(async()=>{
        const response = await axios.get("http://localhost:5000/products")
        const productData = response.data.map(product =>{
            return{
                name:product.name,
                brand:product.brand,
                category:product.category,
                color:product.color,
                detail:product.detail,
                price:product.price,
                img: Array.isArray(product.img) ? product.img : [product.img]
            }
        })
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));