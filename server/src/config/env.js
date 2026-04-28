require('dotenv').config();

const config = {
    port: process.env.PORT
};

if (!config.port) {
    throw new Error('❌ El puerto no está definido en el archivo .env');
}

module.exports = config;