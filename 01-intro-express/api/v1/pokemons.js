const express = require('express')
// Router es un objeto que nos permite crear rutas
const router = express.Router()

//Las api/s pueden consumir otras api/s
const BASE_URL = 'https://pokeapi.co/api/v2'

router.get('/api/v1/pokemons', (request, response) => {
  const { count } = request.query
  try {
    fetch(`${BASE_URL}/pokemon?limit=${count}`)
      .then((res) => res.json())
      .then((data) => {
        response.status(200).send(data)
      })
  } catch (error) {
    response.status(500).send({
      message: 'Error en el servidor' + error,
    })
  }
})

module.exports = router