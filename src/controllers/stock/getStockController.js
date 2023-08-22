const { getStockHandler } = require("../../handlers/stock/getStockHandler");
const {updateStockHandler}=require('../../handlers/stock/updateStockHandler')

const getStockController = async (req, res) => {
    try {
        await updateStockHandler()
        const stocks = await getStockHandler();

        return stocks.length > 0
            ? res.status(200).json(stocks)
            : res.status(404).send("Stocks not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getStockController };