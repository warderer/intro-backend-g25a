// Dependiendo de la variable de entorno del sistema, va a usar la configuración adecuada de la base de datos del

const env = process.env.NODE_ENV || 'development'

const knexfile = require('./knexfile')
const knex = require('knex')

// Mandar a llamar la configuración correcta del knexfile.js
module.exports = knex(knexfile[env])
