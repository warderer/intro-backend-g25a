// 1 Llamar a la librería express (importarla)
const express = require('express')
// 2 Crear una aplicación de express (instanciarla)
const app = express()

// 3 Configurar la aplicación de express
app.use(express.urlencoded({ extended: true })) // Para que pueda leer el body de las peticiones POST
app.use(express.json()) // Para que pueda leer el body de las peticiones POST

// 4 Crear las rutas de la aplicación
app.get('/', (request, response) => {
  response.send('Hola api de Devf')
})

// 5 Levantar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
