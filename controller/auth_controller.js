const { response, request } = require("express");
const bcrypt = require('bcryptjs');

const {generateJWT} = require("../helpers/jwt")
const User = require("../models/user-model");

const createUser =async (req=request,res = response)=>{

    const {email, phoneNumber, password} = req.body;

    try {
        const existEmeil = await User.findOne({email});
        const existPhoneNumber = await User.findOne({phoneNumber});

        if(existEmeil){
            return res.status(400).json({
                ok:false,
               msg:"El email ya existe"
            })
        }else if(existPhoneNumber){
            return res.status(400).json({
                ok:false,
               msg:"El numero ya existe"
            })
        }
    } catch (error) {
        res.status(500).jason({
            ok:false,
            msg:"Error interno del servidor - comuniquese con el administrado",
            error
        });
    }

    //Encriptar contraseña
    var salt = bcrypt.genSaltSync();
    var hash = bcrypt.hashSync(password, salt);

    const user = new User(req.body);
    user.password = hash;

    await user.save();

    //Generar JWT
    const token = await generateJWT(user.id)
     res.json({
        ok:true,
        user,
        token
    })
}

const loginUser = async (req=request, res=response)=>{
    const {email, password} = req.body;

    const user =  await User.findOne({email});
    if(user == null){
        return res.status(400).json({
            ok:false,
            msg:"Correo o contraseña incorrectas"
        });
    }
    const isPassword = bcrypt.compareSync(password, user.password);
    if(isPassword){
        //Generar JWT
        const token = await generateJWT(user.id);
        res.json({
            ok:true,
            user,
            token
        })
    }else{
        return res.status(400).json({
            ok:false,
            msg:"Correo o contraseña incorrectas"
        });
    }
}
const renewToken = async( req, res = response) => {

    const uid = req.uid;

    // generar un nuevo JWT, generarJWT... uid...
    const token = await generateJWT( uid );

    // Obtener el usuario por el UID, Usuario.findById... 
    const user = await User.findById( uid );

    res.json({
        ok: true,
        user,
        token
    });

}

module.exports = {
    createUser,
    loginUser,
    renewToken
}