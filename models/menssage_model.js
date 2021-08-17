const { Schema, model } = require("mongoose");



const MenssageSchema = Schema(
    {
        msg:{
            type: String,
            require: [true, 'el mensaje es requierido'],
        },
        to:{
            type:Schema.Types.ObjectId,
            ref:'User',
            require:[true, 'El id del emisor es bligatorio']
        },
        from: {
            type:Schema.Types.ObjectId,
            ref:'User',
            require:[true, 'El id del receptor es bligatorio']
        }


    }, {
        timestamps: true
    }
);

module.exports = model('Menssage', MenssageSchema)