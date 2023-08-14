const server = require("./src/server");
const axios = require("axios");
const { sequelize } = require("./src/db.js");
const { PORT } = process.env;

sequelize.sync({ force: true })

    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));