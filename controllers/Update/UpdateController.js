//Import Models
    const Vehicle = require('../../models/Vehicle/Vehicle');

//Control Methods
    //GetVehicleToUpdate Method
        const GetVehicleToUpdate = async (req, res) => {

            try {
                const data = await Vehicle.returnVehicle(req.params.id);

                if(data[0].length > 0) {
                    res.status(200).send(data[0]);
                } else {
                    res.status(404).send({
                        type: 'error',
                        message: "Veículo não encontrado!"
                    });
                }
            } 
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao carregar dados!',
                    error: err
                });
            }

        }

    //UpdateVehicle Method
        const Update = async (req, res) => {
            const { name, brand, carYear, description, price } = req.body;

            if(name && brand && carYear && description && price) {
                try {
                    await Vehicle.UpdateVehicle(req.params.id, name, brand, carYear, description, price);

                    res.status(201).send({
                        type: 'success',
                        message: 'Dados do veículo atualizados!'
                    });
                } 
                catch(err) {
                    res.status(500).send({
                        type: 'error',
                        message: 'Erro ao editar dados do veículo!',
                        error: err
                    });
                }
            } 
            else {
                res.status(400).send({
                    type: 'error',
                    message: 'Formulário de update incompleto!'
                });
            }
        }

//Export Module
    module.exports = {

        GetVehicleToUpdate: GetVehicleToUpdate,
        Update: Update

    }