//Import Models
const Vehicle = require('../../models/Vehicle/Vehicle');

//Control Methods
    //GetAllVehicles Method
        const GetUserVehicles = async (req, res) => {

            try {
                const data = await Vehicle.returnAllUserVehicles(req.params.id);

                res.status(200).send(data[0]);
            } 
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao carregar dados!',
                    error: err
                });
            }

        }

    //Delete Method
        const Delete = async (req, res) => {
            
            try {
                await Vehicle.DeleteVehicle(req.params.id);

                res.status(200).send({
                    type: 'success',
                    message: 'Veículo removido com sucesso!'
                });
            } 
            catch(err) {
                res.status(500).send({
                    type: 'error',
                    message: 'Erro ao excluir veículo!',
                    error: err
                });
            }

        }

//Export Module
    module.exports = {

        GetUserVehicles: GetUserVehicles,
        Delete: Delete

    }