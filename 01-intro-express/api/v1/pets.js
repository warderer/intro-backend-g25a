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
    return pet.age == age || pet.type == type
  })
  response.status(200).send(filteredPets)
  return
})

//Params
// Son variables que se mandan en la url, y son definidas por nosotros
// Se definen con :nombreVariable
//Rutas dinamicas
// URL/api/v1/pets/1

router.get('/api/v1/pets/:id', (request,response)=> {
  console.log('Params', request.params)
  const onePet = petList.pets.find((pet)=> pet.id == request.params.id)

  onePet ? response.status(200).send(onePet) :
  response.status(404).send({
    message: 'Pet not found'
  })

})

module.exports = router