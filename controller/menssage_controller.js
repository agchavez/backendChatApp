
const Menssage = require("../models/menssage_model");
const { validationResult } = require('express-validator');
const obtenerChat = async(req, res) => {
    try{
        console.log(validationResult(req).array());
        if (!validationResult(req).isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: validationResult(req).array()
            });
        }
    const miId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Menssage.find({
        $or: [{ to: miId, from: mensajesDe }, { to: mensajesDe, from: miId } ]
    })
    .sort({ createdAt: 'desc' })
    .limit(30);

    res.json({
        ok: true,
        mensajes: last30
    })
    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error?.errors
        })
    }

}



module.exports = {
    obtenerChat
}