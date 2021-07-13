const { validationResult } = require("express-validator");


const validatorFields = (req, res, next)=>{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.json({
            ok:false,
            errores:errores.mapped()
        })
    }
    next();

}

module.exports = {
    validatorFields
}