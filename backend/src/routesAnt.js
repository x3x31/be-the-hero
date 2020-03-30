const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/ongs', async (request, response) => {

    const ongs = await connection('ongs').select('*');
    
    
    return response.json(ongs);
})

routes.post('/ongs', async (request, response) => {

    //const data = request.body;
    //console.log(data);

    const {name, email, whatsapp, city, uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    

    return response.json({id});
})




/**
 * TESTES
 */

routes.get('/users', (request, response) => {

    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Willian Alves'
    });
})

routes.get('/users/:id', (request, response) => {

    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Alves'
    });
})

routes.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Alves'
    });
})

/**
 * TESTES
 */

routes.get('/users', (request, response) => {

    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Willian Alves'
    });
})

routes.get('/users/:id', (request, response) => {

    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Alves'
    });
})

routes.post('/users', (request, response) => {

    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Michel Alves'
    });
})

module.exports = routes;