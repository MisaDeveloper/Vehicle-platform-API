//Import Database Connection
    const connect = require('../Connection');

//Vehicle Methods
    //Return Method
        async function returnVehicle(id = false) {

            const connection = await connect;

            if(id) {
                const data = await connection.execute(`
                    SELECT *
                    FROM tb_vehicle
                    WHERE id = ?;
                `, [id]);

                return data;
            } 
            else {
                const data = await connection.execute(`
                    SELECT *
                    FROM tb_vehicle;
                `);

                return data;
            }
        }

    //returnAllUserVehicles Method
        async function returnAllUserVehicles(id) {
            const connection = await connect;

            const data = await connection.execute(`
                SELECT *
                FROM tb_vehicle
                WHERE userId = ?;
            `, [id]);

            return data;
        }

    //Create Method
        async function createVehicle(name, brand, carYear, description, price, userId) {
            const priceCents = price * 100;
            const values = [name, brand, carYear, description, priceCents, userId];
            
            const connection = await connect;
            await connection.execute(`
                INSERT INTO tb_vehicle(
                    name,
                    brand,
                    carYear,
                    description,
                    priceCents,
                    userId
                ) VALUES(?, ?, ?, ?, ?, ?);
            `, values);
        }

    //Update Method
        async function UpdateVehicle(id, name, brand, carYear, description, price) {
            const priceCents = price * 100;
            const values = [name, brand, carYear, description, priceCents, id];

            const connection = await connect;
            await connection.execute(`
                UPDATE tb_vehicle
                SET name = ?, brand = ?, carYear = ?, description = ?, priceCents = ?
                WHERE id = ?
            `, values);
        }

    //Delete Method
        async function DeleteVehicle(id) {

            const connection = await connect;
            await connection.execute(`
                DELETE FROM tb_vehicle
                WHERE id = ?
            `, [id]);

        }

    //SearchVehicle
        async function SearchVehicle(stringSearch) {
            const connection = await connect;
            const data = await connection.execute(`
                SELECT *
                FROM tb_vehicle
                WHERE MATCH(name, brand, description) AGAINST(?);
            `, [stringSearch]);

            return data;
        }

//Export Module
    module.exports = {

        createVehicle: createVehicle,
        returnAllUserVehicles: returnAllUserVehicles,
        returnVehicle: returnVehicle,
        UpdateVehicle: UpdateVehicle,
        DeleteVehicle: DeleteVehicle,
        SearchVehicle: SearchVehicle

    }