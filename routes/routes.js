//Import Modules
    const express = require('express');
    const router = express.Router();
    const verifyAuth = require('../Auth/verifyAuth');

    //Controller Modules
        const HomeController = require('../controllers/Home/HomeController');
        const MyPublicationsController = require('../controllers/myPublications/MyPublicationsController');
        const UpdateController = require('../controllers/Update/UpdateController');
        const CreateController = require('../controllers/Create/CreateController');
        const SignupController = require('../controllers/Signup/SignupController');
        const LoginController = require('../controllers/Login/LoginController');

//Define Routes
    router.post('/login', LoginController.Login);
    router.post('/signup', SignupController.Signup);

    router.get('/', verifyAuth, HomeController.GetAllVehicles);
    router.get('/mypublications/:id', verifyAuth, MyPublicationsController.GetUserVehicles);
    router.delete('/delete/:id', verifyAuth, HomeController.Delete);
    router.get('/search/:stringSearch', HomeController.Search);
    router.post('/create', verifyAuth, CreateController.CreateNewVehicle);
    router.get('/update/:id', verifyAuth, UpdateController.GetVehicleToUpdate);
    router.put('/update/:id', verifyAuth, UpdateController.Update);

//Export Module
    module.exports = router;