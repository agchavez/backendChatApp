const { request, response } = require("express");
const User = require("../models/user-model");


const getUser = async (req= request, res= response)=>{
    const since =  Number(req.query.since) || 0;
    const limit =  Number(req.query.limit)  || 5;
    const user = await  User
    .find({_id:{$ne:req.uid}})
    .sort('-online')
    .skip(since)
    .limit(limit)
    ;
    res.status(200).json({
        user
    })
}



module.exports = {
    getUser
}