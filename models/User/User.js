//Import Database Connection
    const connect = require('../Connection');
    const crypt = require('../../crypt/crypt');

//User Methods
    //getUserByEmail Method
        async function getUserByEmail(email) {
            const connection = await connect;
            
            const data = await connection.execute(`
                SELECT *
                FROM tb_users
                WHERE email = ?;
            `, [email]);

            return data;
            
        }

    //AuthUser Method
        async function AuthUser(email, password) {
            const data = await getUserByEmail(email);

            if(data[0].length != 0) {

                if(await crypt.compareCrypt(password, data[0][0].accountPass)) {
                    return data;
                }
                else {
                    return false;
                }

            } else {
                return false;
            }
        }

    //SignupUser Method
        async function SignupUser(fistName, lastName, email, password) {
            const connection = await connect;
            const pswHashed = await crypt.encrypt(password);
            const values = [fistName, lastName, email, pswHashed];
            
            await connection.execute(`
                INSERT INTO tb_users(
                    firstName,
                    lastName,
                    email,
                    accountPass
                ) VALUES(?, ?, ?, ?);
            `, values);
            
        }

//Export Module
    module.exports = {

        SignupUser: SignupUser,
        getUserByEmail: getUserByEmail,
        AuthUser: AuthUser

    }