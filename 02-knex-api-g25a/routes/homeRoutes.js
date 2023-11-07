const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Si la ruta es homes, ejecute homeController y la función createHome
router.get('/homes', homeController.createHome)

module.exports = router
