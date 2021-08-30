const  mongoose  = require("mongoose");



const dbConnection = async() =>{
    try {
       await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        console.log(`DB CONECTADA EN: ${process.env.DB_CNN}`);
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos - comuniquese con el admin')
    }
}


module.exports = {
    dbConnection
}
