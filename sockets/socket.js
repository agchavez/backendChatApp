const { userConected, userDisconnected } = require('../controller/socket_controller');
const { validateJWTSocket } = require('../helpers/jwt');
const { io } = require('../index');


// Mensajes de Sockets
io.on('connection', async(client) => {
    console.log('Cliente conectado');
    const token = client.handshake.headers['x-token'];
    console.log("conectando");
    const [valid, uid] =  validateJWTSocket(token);
    if(!valid){return client.disconnect()}

    
    
    
    //Cliente autentcado 
    await userConected(uid);

    client.join(uid);

    client.on('menssage-personal',(payload)=>{  
        payload["date"] = new Date();
        io.to(payload.to).emit('menssage-personal', payload);
        
    })
    client.on('disconnect', () => {
         userDisconnected(uid);
        console.log('Cliente desconectado');
    });

    // client.on('mensaje', ( payload ) => {
    //     console.log('Mensaje', payload);

    //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );

    // });


});
