//Import Models
    const User = require('../../models/User/User');
    const jwt = require('jsonwebtoken');
    const SECRET = require('../../Auth/AuthSecret');

//Control Methods
    const Login = async (req, res) => {
        
        const { email, password } = req.body;

        if(
            email &&
            password
        ) {

            try {
                const statusAuth = await User.AuthUser(email, password);

                if(statusAuth) {
                    const token = jwt.sign({
                        userId: statusAuth[0][0].id
                    }, SECRET, {
                        expiresIn: 600
                    });

                    res.status(202).send({
                        type: 'success',
                        message: 'Usuário autenticado!',
                        user: {
                            id: statusAuth[0][0].id,
                            firstName: statusAuth[0][0].firstName,
                            lastName: statusAuth[0][0].lastName,
                            email: statusAuth[0][0].email
                        },
                        auth: true,
                        token: token
                    });
                }
                else {
                    res.status(203).send({
                        type: 'error',
                        message: 'Email e/ou senha incorretos!'
                    });
                }

            }
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao realizar login de usuário!',
                    error: err
                });
            }
        } 
        else {
            res.status(400).send({
                type: 'error',
                message: 'Formulário de login incompleto!'
            });
        }

    }
    

//Export Module
    module.exports = {

        Login: Login

    }