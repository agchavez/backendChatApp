const Menssage = require("../models/menssage_model");
const User = require("../models/user-model")


const userConected = async(uid = '')=>{
    
    user = await User.findById(uid);
    user.online = true;
    await user.save();
    return user;
}

const userDisconnected = async(uid = '')=>{
    user = await User.findById(uid);
    user.online = false;
    await user.save();
    return user;
}

const cargarMenssage = async(payload)=>{
    try {
        const message = new Menssage()
        
    } catch (error) {
        return false;
    }
}

const grabarMensaje = async( payload ) => {

    try {
        console.log(payload);
        const mensaje = new Menssage( payload );
        await mensaje.save();

        return true;
    } catch (error) {
        return false;
    }

}




module.exports = {
    userConected,
    userDisconnected,
    cargarMenssage,
    grabarMensaje
}