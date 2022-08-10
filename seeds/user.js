/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, 
      name: '',
      is_employee: false
      },
      {id: 2, 
        name: '',
        is_employee: true
        },
        {id: 3, 
          name: '',
          is_employee: false
          },
          {id: 4, 
            name: '',
            is_employee: false
            },
            {id: 5, 
              name: '',
              is_employee: true
              }
  ]);
};
