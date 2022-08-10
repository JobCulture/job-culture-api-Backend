/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('review').del()
  await knex('company').del()
  await knex('user').del()
};
