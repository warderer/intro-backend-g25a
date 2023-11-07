const express = require('express')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */

/* Levantar el servidor */
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
