/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').insert([
    {
      user_id: 2,
      company_id: 4,
      review_text: 'Great workplace',
      rating: 2
    },
    {
      user_id: null,
      company_id: 3,
      review_text: 'amazing company',
      rating: 4
    },
    {
      user_id: null,
      company_id: 2,
      review_text: 'Diverse practices',
      rating: 3
    },
    {
      user_id: null,
      company_id: 5,
      review_text: 'Great work life balance',
      rating: 5
    },
  ]);
};
