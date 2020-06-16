/*****CONFIGURAÇÕES*****/
require('dotenv/config')
const server = require('./config/serverConfig')
const routes = require('express').Router()

/*****BANCO DE DADOS*****/
//const db = require('./database/mongoDB-connection')

/*****ROTAS*****/
server.use('/', require('./routes/index'))


//ligar o servidor
server.listen(process.env.PORT)
