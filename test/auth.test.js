const app = require("../app");
const supertest = require('supertest')
const User = require('../models/user-model');


var token = '';
// Agregar un nuevo usuario
describe('POST:/new', () => {
    // Nuevo usuario
    test('Create new user', async () => {
        await User.deleteMany({})
        await supertest(app).post('/api/auth/new').send({
            name : "home",
            email : "hole@sd.com",
            password : "asdadad",
            phoneNumber : 45789632
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });

    // Usuario ya existe
    test('User already exists', async () => {
        await supertest(app).post('/api/auth/new').send({
            name : "home",
            email : "hole@sd.com",
            password : "asdadad",
            phoneNumber : 45789632
        })
        .expect('Content-Type', /json/)
        .set('Accept', 'application/json')
        .expect(400)
    }) 
});

// crear nuevo usuario
describe('GET/login', () => {
    // Login exitoso
    test('Login successful', (done) => {
        supertest(app).post('/api/auth/login').send({
            email : "hole@sd.com",
            password : "asdadad"
        })
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
            token = res.body.token;
            done(); // Or something
          })
    }) 

    // Correo no existe
    test('Login successful', (done) => {
        supertest(app).post('/api/auth/login').send({
            email : "hoe@sd.com",
            password : "asdadad"
        })
        .set('Accept', 'application/json')
        .expect(400)
        .end(done())
    })    
    })

