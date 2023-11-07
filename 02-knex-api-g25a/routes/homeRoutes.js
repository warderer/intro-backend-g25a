const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)

module.exports = router
