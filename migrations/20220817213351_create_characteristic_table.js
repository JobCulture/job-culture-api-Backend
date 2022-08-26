/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('characteristic', table => {
    table.increments('id').primary()
    table.string('group')
    table.string('type')
    table.string('name')
    table.string('full_description')
    table.string('short_description')
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('characteristic')
};
