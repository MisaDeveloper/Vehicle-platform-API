//Import Models
    const Vehicle = require('../../models/Vehicle/Vehicle');

//Control Methods
    //CreateNewVehicle Method
        const CreateNewVehicle = async (req, res) => {
            const { name, brand, carYear, description, price, userId} = req.body;

            if(name && brand && carYear && description && price && userId) {

                try {
                    await Vehicle.createVehicle(name, brand, carYear, description, price, userId);
                    res.status(201).send({
                        type: 'success',
                        message: 'Veiculo cadastrado!'
                    });
                } 
                catch(err) {
                    res.status(500).send({
                        type: 'error',
                        message: 'Erro ao cadastratar veículo!',
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

        CreateNewVehicle: CreateNewVehicle

    };