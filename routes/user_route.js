const { Router } = require("express");
const { getUser } = require("../controller/user_controller");
const { validatorJWT } = require("../middlewares/validator-jwt");


const route =  Router();


route.get('/', validatorJWT, getUser );

route.get('/home', validatorJWT, getUser );


module.exports = route;