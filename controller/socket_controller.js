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


module.exports = {
    userConected,
    userDisconnected

}