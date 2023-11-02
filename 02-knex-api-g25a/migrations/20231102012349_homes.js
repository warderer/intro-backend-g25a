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
