/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user').insert([
    {
      id: 1,
      job_position: 'Tech Lead',
      job_location: 'Montreal, Canada',
    },
    {
      id: 2,
      job_position: '',
      job_location: '',
    },
    {
      id:3, 
      job_position: 'Product Designer',
      job_location: 'New York, NY',
    },
    {
      id: 4,
      job_position: '',
      job_location: 'Toronto, Canada',
    },
    {
      id: 5,
      job_position: '',
      job_location: 'Vancouver, Canada',
    }
  ]);
};
