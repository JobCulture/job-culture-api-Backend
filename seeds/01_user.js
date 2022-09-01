/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').insert([
    {
      id: 1,
      is_employee: false,
    },
    {
      id: 2,
      is_employee: true,
    },
    {
      id:3, 
      is_employee: false,
    },
    {
      id: 4,
    },
    {
      id: 5,
      is_employee: true,
    }
  ]);
};
