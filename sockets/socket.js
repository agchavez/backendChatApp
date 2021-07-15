const { userConected, userDisconnected } = require('../controller/socket_controller');
const { validateJWTSocket } = require('../helpers/jwt');
const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', async(client) => {
    console.log('Cliente conectado');
    const token = client.handshake.headers['x-token'];
    const [valid, uid] =  validateJWTSocket(token);
    if(!valid){return client.disconnect()}
    
    console.log(uid);
    //Cliente autentcado 
    await userConected(uid);
    client.on('disconnect', () => {
         userDisconnected(uid);
        console.log('Cliente desconectado');
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });


});
