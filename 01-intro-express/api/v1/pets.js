const express = require('express')
// Router es un objeto que nos permite crear rutas
const router = express.Router()
// Importar el modelo o estructura de pets
const petList = require('../../petsData.js')

// Crear la ruta GET /pets
router.get('/api/v1/pets', (request, response) => {
  console.log('Query params', request.query)
})

module.exports = router