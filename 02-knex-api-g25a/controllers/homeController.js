/* Los controladores tienen la logica de negocio */

const createHome = (req, res) => {
  // Aquí yo deberia ejecutar el codigo para crear un nuevo home
  res.status(200).send({
    message: 'Home created'
  })
}

module.exports = {
  createHome
}
