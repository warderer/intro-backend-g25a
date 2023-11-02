/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.table('homes', function (table) {
        // Agregar una columna fk_user y que sea llave foranea
        // Haremos que una casa (homes) pueda pertenecer a un usuario (users)
        table.integer('fk_user').unsigned().references('users.user_id') // references() es una función de knex que nos permite hacer referencia a otra tabla y a su llave primaria
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.table('homes', function (table) {
        table.dropColumn('fk_user') // borro la columna fk_user
      })
    };
  })
}
