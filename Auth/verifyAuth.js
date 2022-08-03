const jwt = require('jsonwebtoken');
const SECRET = require('./AuthSecret');

async function verifyAuth(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                authorized: false,
                type: 'error',
                message: 'Usuário não autorizado!'
            });
        }

        next();
    });
}

module.exports = verifyAuth;