/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').insert([
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Work-life balance',
      rating: 2,
      characteristic_id: 1
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Work-life balance',
      rating: 5,
      characteristic_id: 1
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Diversity',
      rating: 2,
      characteristic_id: 2
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Diversity',
      rating: 3,
      characteristic_id: 2
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Trust',
      rating: 2,
      characteristic_id: 3
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Trust',
      rating: 5,
      characteristic_id: 3
    },
    {
      user_id: 5,
      company_id: 4,
      review_text: 'This job provided me with the opportunity to work with Trust',
      rating: 4,
      characteristic_id: 3
    },
    {
      user_id: null,
      company_id: 3,
      review_text: 'This job provided me with the opportunity to work withamazing company with Remote flexibility',
      rating: 4,
      characteristic_id: 4
    },
    {
      user_id: null,
      company_id: 3,
      review_text: 'This job provided me with the opportunity to work withamazing company with Inclusive environment',
      rating: 4,
      characteristic_id: 5
    },
    {
      user_id: null,
      company_id: 3,
      review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
      rating: 4,
      characteristic_id: 6
    },
    {
      user_id: null,
      company_id: 3,
      review_text: 'This job provided me with the opportunity to work withamazing company with Growth opportunies',
      rating: 4,
      characteristic_id: 7
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: 'This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 3,
      characteristic_id: 8

    },
    {
      user_id: 2,
      company_id: 2,
      review_text: 'This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 3,
      characteristic_id: 9

    },
    {
      user_id: null,
      company_id: 5,
      review_text: 'This job provided me with the opportunity to work withamazing company with Diverse leadership',
      rating: 5,
      characteristic_id: 10
    },
    {
      user_id: null,
      company_id: 5,
      review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
      rating: 5,
      characteristic_id: 14
    },
    {
      user_id: null,
      company_id: 5,
      review_text: 'This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
      rating: 5,
      characteristic_id: 15
    },
  ]);
};
