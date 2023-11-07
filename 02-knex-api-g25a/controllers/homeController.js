const ModelHomes = require('../models/Homes')
/* Los controladores tienen la logica de negocio */

const createHome = (req, res) => {
  // Aquí yo deberia ejecutar el codigo para crear un nuevo home
//   res.status(200).send({
//     message: 'Home created'
//   })
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send({ message: 'Home Created', data: row })
    })
    .catch(err => {
      res.status(400).send({ message: 'Error creating home', err })
    })
}

module.exports = {
  createHome
}
