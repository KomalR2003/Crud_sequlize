const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectModule: require('mysql2'),
       
    });

    async function connection() {
        try {
            await sequelize.authenticate();
            console.log("connection has been established successfully...");
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }
    connection();

    module.exports = sequelize;