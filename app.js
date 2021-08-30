const express = require('express');
const path = require('path');
require('dotenv').config();

// DB Config
require('./database/config_database').dbConnection();


// App de Express
const app = express();

// Lectura y parseo del Body
app.use( express.json() );


// Node Server
// const server = require('http').createServer(app);
// module.exports.io = require('socket.io')(server);
// require('./sockets/socket');




// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );



// Mis Rutas
app.use( '/api/auth', require('./routes/auth_route') );
app.use( '/api/user', require('./routes/user_route') );


module.exports = app