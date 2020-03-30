const express = require('express');

const cors = require('cors');


const routes = require('./routes')

const app = express();

//app.use(cors({origin:'http://meuapp.com'})); //módulo de segurança que vai determinar quem vai poder acessar a aplicação em ambiente de PRODUÇÃO 
app.use(cors()); //módulo de segurança que vai determinar quem vai poder acessar a aplicação em ambiente de DESENVIMENTO 
app.use(express.json()); //Para entender que será recebido um JSON no corpa da requisição 
app.use(routes);
app.listen(3333);
