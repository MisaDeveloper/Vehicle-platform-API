//Import MySQL Lib
    const mysql = require('mysql2/promise');

//Connect Function
    async function connect() {
        if(global.connection && global.connection !== 'disconnected') {
            return global.connection;
        }

        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'vehicle_platform'
        });

        global.connection = connection;
        return connection;
    }

//Export Module
    module.exports = connect();