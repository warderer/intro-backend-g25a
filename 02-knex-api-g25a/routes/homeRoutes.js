const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:idHome', homeController.findOneHome)
router.patch('/homes/:idHome', homeController.updateOneHome)
router.delete('/homes/:idHome', homeController.softDeleteOneHome)
router.delete('/homes/destroy/:idHome', homeController.destroyOneHome)

module.exports = router
