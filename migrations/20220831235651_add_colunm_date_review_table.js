/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('review', function (table) {
    table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
    // 
    // ;
    
    knex.schema.raw('ALTER TABLE review ALTER COLUMN "rating" SET NOT NULL;');
    knex.schema.raw('ALTER TABLE review ALTER COLUMN "characteristic_id" SET NOT NULL;');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('review', function (table) {
    table.dropColumn('created_at');
  });
};
