const { createProductHandler } = require('../../handlers/products/createProductHandler')

const createProductController = async ( req, res ) => {
    try {


        const {
                name,
                brand,
                category,
                detail,
                price,
                img,
                status,
        } = req.body;
            

        if( !name || !brand || !category || !detail || !price || !img || !status ) {
            throw new Error( "missing data for registration" );
        }

        const product = await createProductHandler( name, brand, category, detail, price, img, status );

        console.log(product)
        
        if(product && product.error) {
            return res.status(400).json({error: product.error})
        } else {
            return res.status(200).send("Producto creado correctamente");
        }



    } catch ( error ) {


        console.error(error);
        return res.status(500).json({ error : "Hubo un error en el servidor" })

        
    }
}

module.exports = { createProductController }