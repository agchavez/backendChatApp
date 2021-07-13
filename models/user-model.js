const { Schema, model } = require("mongoose");


const UserSchema = Schema({
    name:{
        type: String,
        require:[true, 'Nombre es requerido']
    },
    email:{
        type:String,
        require:[true, 'email es requerido'],
        unique:true
    },
    phoneNumber:{
        type: Number ,
        require:[true, 'phoneNumber es requerido'],
        unique:true
    },
    online:{
        type:Boolean,
        require:false,
    },
    password:{
        type: String,
        require:[true, 'password es requerido']
    },
    img:{
        type:String,
        default:""
    }
})

//Personalizar la salida del registro JSON
UserSchema.method('toJSON', function(){
    const {__v,_id, password, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = model('User', UserSchema);