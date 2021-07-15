const jwt = require('jsonwebtoken');


const generateJWT = (uid)=>{

    return new Promise((resolve, reject) => {
        //Los datos que va contener el JWT
        const payload = {uid};

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn:'4h'
        }, (err, token) =>{
            if(err){
                reject('No se puedo generar el token')
            }else{
                resolve(token)
            }
        })

    })
    
}

const validateJWTSocket = (token ="")=>{
    try {
        const {uid} = jwt.verify(token, process.env.JWT_KEY )
        return [true, uid];
        
    } catch (error) {
        return [false, null];
    }

}

module.exports = {
    generateJWT,
    validateJWTSocket
}