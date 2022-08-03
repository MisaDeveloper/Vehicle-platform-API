//Import Libs
    const bcrypt = require('bcrypt');

//Crypt Methods
    //Encrypt Method
        async function encrypt(password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            return await hashedPassword;
        }

    //CompareCrypt Method
        async function compareCrypt(userPass, dbPass) {
            if(await bcrypt.compare(userPass, dbPass)) {
                return true;
            } else {
                return false;
            }
        }

//Export Module
    module.exports = {

        encrypt: encrypt,
        compareCrypt: compareCrypt

    }