const app = require('./app.js')
require('dotenv').config();

app.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});

module.exports = app;

