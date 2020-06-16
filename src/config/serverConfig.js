const express = require('express')
const server = express()

server.use(express.json())

/*****BANCO DE DADOS*****/
const db = require('../database/mongoDB-connection')

//configurar pasta pública
server.use(express.static('public'))

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


module.exports = server