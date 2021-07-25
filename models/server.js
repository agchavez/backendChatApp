const express = require('express');

const cors = require('cors');


const { dbConnection } = require('../database/config_database');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            user:'/api/user',
            msg:'/api/msg'
        }
        // Conectar a base de datos
        this.connectDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

    }

    async connectDB (){
        await dbConnection()
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        this.app.use(express.json());
        // Directorio Público
        this.app.use( express.static('public') );
        
    }

    routes(){
        this.app.use(this.paths.user, require('../routes/user_route'));
        this.app.use(this.paths.auth, require('../routes/auth_route'));
        //this.app.use(this.paths.msg, require('../routes/menssage_route'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }  
}

module.exports = Server;