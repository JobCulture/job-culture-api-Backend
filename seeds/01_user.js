/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').insert([
    {
      is_employee: false
    },
    {
      is_employee: true
    },
    {
      is_employee: false
    },
    {
      is_employee: false
    },
    {
      is_employee: true
    }
  ]);
};
