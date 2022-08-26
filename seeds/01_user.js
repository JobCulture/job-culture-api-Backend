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
      job_location: 'New York',
      job_position: 'Software Engineer'

    },
    {
      id: 2,
      is_employee: true,
      job_location: 'Atlanta',
      job_position: 'Recruiter'
    },
    {
      id:3, 
      is_employee: false,
      job_location: 'Florida',
      job_position: 'Operations Manager'
    },
    {
      id: 4,
      is_employee: false,
      job_location: 'Los Angeles',
      job_position: 'Program Manager'
    },
    {
      id: 5,
      is_employee: true,
      job_location: 'Florida',
      job_position: 'Operations Manager'
    }
  ]);
};
