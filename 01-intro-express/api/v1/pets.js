const express = require('express')
// Router es un objeto que nos permite crear rutas
const router = express.Router()
// Importar el modelo o estructura de pets
const petList = require('../../petsData.js')

// Crear la ruta GET /pets
//Query params : ?key=value&key2=value2
//Son similares a los params,  pero se suelen  enviar en la url para enviar uno o mas datos
// las querys son aviertas, no definimos cuantas variables nos tienen que mandar, ni como se llaman, nuestra responsabilidad
// es solo tomar en cuanta aquellos que nos intereses
router.get('/api/v1/pets', (request, response) => {
  console.log('Query params', request.query)
  const { age, type } = request.query
  if(!age && !type) {
     response.status(200).send(petList)
     return
  }
  const filteredPets = petList.pets.filter((pet) => {
    return pet.age = age || pet.type === type
  })
  response.status(200).send(filteredPets)
  return
})

module.exports = router