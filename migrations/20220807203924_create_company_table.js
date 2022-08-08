/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('company', table => {
        table.increments('id').primary().notNullable()
        table.string('name').notNullable()
        table.string('info').notNullable()
        table.string('location').notNullable()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('company')
};
