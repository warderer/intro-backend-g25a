const ModelHomes = require('../models/Homes')
/* Los controladores tienen la logica de negocio */

const createHome = (req, res) => {
  // Aquí yo deberia ejecutar el codigo para crear un nuevo home
//   res.status(200).send({
//     message: 'Home created'
//   })
  ModelHomes.create(req.body)
    .then(row => {
      res.status(201).send(row)
    })
    .catch(err => {
      res.status(400).send(err.message)
    })
}

module.exports = {
  createHome
}
