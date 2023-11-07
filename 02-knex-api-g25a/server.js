const express = require('express')
// Importar las rutas de mi vista (Home)
const homeRoutes = require('./routes/homeRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */
app.use('/api/v1', homeRoutes)

/* Levantar el servidor */
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
