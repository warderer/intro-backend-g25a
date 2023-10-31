const express = require('express')
// Router es un objeto que nos permite crear rutas
const router = express.Router()

// Los códigos de estado y los verbos HTTP (get, post, put, etc.)
// Son una CONVECIÓN, no son una regla (no es una obligación).
// Cada desarrollador puede usar los que quiera.
// PERO NO ES RECOMENDABLE, ES UNA MALA PRÁCTICA.

// Ejemplo de mala practica: uso path en vez de get, y uso 207 en vez de 200, asi cm 401 en vez 200
router.patch('/api/v1/cakes/:cakeId', (request, response)=>{
  const { cakeId } = request.params
  console.log(cakeId)
  if(cakeId > 100){
    response.status(401).send({
      message: 'El pastel esta feo'
    })
  }
  else {
    const mensaje = {
      id: `El id del pastel es ${cakeId}`,
    }
    response.status(207).send(mensaje)
  }
  response.send(cakeId)
})

module.exports = router