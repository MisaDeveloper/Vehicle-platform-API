//Import Models
    const User = require('../../models/User/User');

//Control Methods
    //Signup Method
        const Signup = async (req, res) => {

            const { firstName, lastName, email, password } = req.body
            
            if(
                firstName &&
                lastName &&
                email &&
                password
            ) {
                try {
                    const data = await User.getUserByEmail(email);

                    if(data[0].length == 0) {
                        await User.SignupUser(firstName, lastName, email, password);
                        res.status(201).send({
                            type: 'success',
                            message: 'Usuário cadastrado!'
                        });
                    }
                    else {
                        res.status(401).send({
                            type: 'error',
                            message: 'O email de usuário já está cadastrado!'
                        });
                    }
                } 
                catch(err) {
                    res.status(500).send({
                        type: 'error',
                        message: 'Erro ao cadastratar Usuário!',
                        error: err
                    });
                }
            }
            else {
                res.status(400).send({
                    type: 'error',
                    message: 'Formulário de criação incompleto!'
                });
            }

        }

//Export Module
    module.exports = {
        
        Signup: Signup

    }
