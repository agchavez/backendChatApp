const express = require('express');
const path = require('path');
const { dbConnection } = require('./database/config_database');
require('dotenv').config();

// DB config
 dbConnection();

// App de Express
const app = express();

//Lectura y parceo del body
app.use(express.json());
// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );


//Rutas

app.use('/api/auth', require('./routes/auth_route'));
app.use('/api/user', require('./routes/user_route'));



server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


