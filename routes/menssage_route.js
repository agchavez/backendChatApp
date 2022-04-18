/*
    Path: /api/mensajes
*/
const { Router } = require('express');
const { validatorJWT } = require("../middlewares/validator-jwt");


const { obtenerChat } = require('../controller/menssage_controller');
const { check } = require('express-validator');

const router = Router();


router.get('/:de', [
    check('de').isMongoId().withMessage('El id del usuario debe ser un ObjectId válido'),

    validatorJWT
], obtenerChat );

module.exports = router;


