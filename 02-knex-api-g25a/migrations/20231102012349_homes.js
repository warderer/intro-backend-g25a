/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP
   Aqui colocaremos toda la lógica de la migración, es decir, la creación de la tabla, actualización de campos, etc.
*/
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function (table) {
        table.increments('house_id').primary() // primary() quiere decir que es la llave primaria
        table.string('title').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
        table.text('description')
        table.integer('guests')
        table.text('address')
        table.decimal('rental_price', 12, 2)
        table.boolean('active').notNullable().defaultTo(true) // defaultTo() quiere decir un valor por defecto
        table.timestamp('created_at').defaultTo(knex.fn.now()) // fn.now() es una función de knex que nos da la fecha y hora actual
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/*  EXPORTS.DOWN
    Aquí colocaremos la lógica para deshacer la migración, es decir, eliminar la tabla, eliminar campos, etc.
*/
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('homes')
    }
  })
}
/* GUIA DE USO RÁPIDO DE KNEX */

// ** CREAR UNA MIGRACIÓN **
// knex migrate:make nombre_de_la_migracion
// Esto crea una carpeta llamada migrations en la raíz del proyecto y dentro de ella un archivo con el nombre de la migración que le dimos como parámetro.

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.UP() **
// Al ejecutar una migración sobre exports.up() estamos creando o modificando una tabla en la base de datos.
// Ejecutar la última migración (up): knex migrate:latest
// Ejecutar todas las migraciones (up): knex migrate:up
// Ejecutar una migración específica (up): knex migrate:up nombre_de_la_migracion.js

// ** EJECUTAR LAS MIGRACIONES SOBRE EXPORTS.DOWN() **
// Al ejecutar una migración sobre exports.down() estamos eliminando o modificando una tabla en la base de datos.
// Ejecutar la última migración (down): knex migrate:rollback
// Ejecutar todas las migraciones (down): knex migrate:down
// Ejecutar una migración específica (down): knex migrate:down nombre_de_la_migracion.js
