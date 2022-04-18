const  mongoose  = require("mongoose");



const dbConnection = async() =>{
    console.log("Connecting to database" + process.env.DB_CNN);
    try {
       await mongoose.connect(
              process.env.DB_CNN,{
        poolSize: 10,
        authSource: "admin",
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        });
        console.log(`DB CONECTADA EN: ${process.env.DB_CNN}`);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    dbConnection
}
