

/*
    path: api/user
*/
const { Router, response } = require("express");
const { check } = require("express-validator");

const { createUser, loginUser } = require("../controller/auth_controller");
const { validatorFields } = require("../middlewares/validator-fields");
const { validatorJWT } = require("../middlewares/validator-jwt");

const route = Router();

//post 
route.post('/new', [
    check('name','El nombre es obligatorio').notEmpty(),
    check('email','El correo no es invalido').isEmail(),
    check('password','El nombre es obligatorio').notEmpty(),
    check('phoneNumber','El numero no es valido').isMobilePhone(),
    validatorFields
],createUser);

route.get('/login', [
    check('email','El correo no es invalido').isEmail(),
    check('password','El nombre es obligatorio').notEmpty(),
    validatorFields
], loginUser)


module.exports = route;