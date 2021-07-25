const { Schema } = require("mongoose");



const Menssage = Schema(
    {
        msg:{
            type: String,
            require: [true, 'el mensaje es requierido'],
        },
        date:{
            type:Date,
            default: Date.now()
        },
        transmitter:{
            type:Schema.Types.ObjectId,
            ref:'User',
            require:[true, 'El id del emisor es bligatorio']
        },
        receiver:    {
            type:Schema.Types.ObjectId,
            ref:'User',
            require:[true, 'El id del receptor es bligatorio']
        }


    }
)