/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('review', table => {
        table.increments('id').primary().notNullable()
        table.integer('user_id').references('id').inTable('user').onDelete('cascade')
        table.integer('company_id').references('id').inTable('company').onDelete('cascade')
        table.string('review_text')
        table.integer('rating')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('review')
};
