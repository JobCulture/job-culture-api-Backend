/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').insert([
    {  user_id: 1,
      company_id: 2,
      review_text: '11-This job provided me with the opportunity to work with Work-life balance',
      rating: 1,
      characteristic_id: 1,
      created_at: new Date().toISOString()
    },
    {  user_id: 2,
      company_id: 2,
      review_text: '21-This job provided me with the opportunity to work with Work-life balance',
      rating: 3,
      characteristic_id: 1,
      created_at: new Date().toISOString()
    },
    {  user_id: 3,
      company_id: 2,
      review_text: '31-This job provided me with the opportunity to work with Work-life balance',
      rating: 2,
      characteristic_id: 1,
      created_at: new Date().toISOString()
    },
    {  user_id: 4,
      company_id: 2,
      review_text: '41-This job provided me with the opportunity to work with Work-life balance',
      rating: 2,
      characteristic_id: 1,
      created_at: new Date().toISOString()
    },
    {  user_id: 5,
      company_id: 2,
      review_text: '51-This job provided me with the opportunity to work with Work-life balance',
      rating: 5,
      characteristic_id: 1,
      created_at: new Date().toISOString()
    },
    { user_id: 1,
      company_id: 2,
      review_text: '12-This job provided me with the opportunity to work with Diversity',
      rating: 1,
      characteristic_id: 2,
      created_at: new Date().toISOString()
    },
    { user_id: 2,
      company_id: 2,
      review_text: '22-This job provided me with the opportunity to work with Diversity',
      rating: 1,
      characteristic_id: 2,
      created_at: new Date().toISOString()
    },
    { user_id: 3,
      company_id: 2,
      review_text: '32-This job provided me with the opportunity to work with Diversity',
      rating: 3,
      characteristic_id: 2,
      created_at: new Date().toISOString()
    },
    { user_id: 4,
      company_id: 2,
      review_text: '42-This job provided me with the opportunity to work with Diversity',
      rating: 4,
      characteristic_id: 2,
      created_at: new Date().toISOString()
    },
    { user_id: 5,
      company_id: 2,
      review_text: '52-This job provided me with the opportunity to work with Diversity',
      rating: 2,
      characteristic_id: 2,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '13-This job provided me with the opportunity to work with Trust',
      rating: 5,
      characteristic_id: 3,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '23-This job provided me with the opportunity to work with Trust',
      rating: 3,
      characteristic_id: 3,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '33-This job provided me with the opportunity to work with Trust',
      rating: 4,
      characteristic_id: 3,
      created_at: new Date().toISOString()
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '43-This job provided me with the opportunity to work with Trust',
      rating: 2,
      characteristic_id: 3,
      created_at: new Date().toISOString()
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '53-This job provided me with the opportunity to work with Trust',
      rating: 1,
      characteristic_id: 3,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '',
      rating: 2,
      characteristic_id: 4,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '14-This job provided me with the opportunity to work withamazing company with Remote flexibility',
      rating: 5,
      characteristic_id: 4,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '24-This job provided me with the opportunity to work withamazing company with Remote flexibility',
      rating: 3,
      characteristic_id: 4,
      created_at: new Date().toISOString()
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '34-This job provided me with the opportunity to work withamazing company with Remote flexibility',
      rating: 1,
      characteristic_id: 4,
      created_at: new Date().toISOString()
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '44-This job provided me with the opportunity to work withamazing company with Remote flexibility',
      rating: 5,
      characteristic_id: 4,
      created_at: new Date().toISOString()
    },

    {
      user_id: 1,
      company_id: 2,
      review_text: '15-This job provided me with the opportunity to work withamazing company with Inclusive environment',
      rating: 3,
      characteristic_id: 5,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '25-This job provided me with the opportunity to work withamazing company with Inclusive environment',
      rating: 4,
      characteristic_id: 5,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '',
      rating: 5,
      characteristic_id: 5,
      created_at: new Date().toISOString()
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '',
      rating: 4,
      characteristic_id: 5,
      created_at: new Date().toISOString()
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '',
      rating: 5,
      characteristic_id: 5,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '',
      rating: 3,
      characteristic_id: 6,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '',
      rating: 3,
      characteristic_id: 6,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '',
      rating: 4,
      characteristic_id: 6,
      created_at: new Date().toISOString()
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '',
      rating: 1,
      characteristic_id: 6,
      created_at: new Date().toISOString()
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '',
      rating: 1,
      characteristic_id: 6,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '17-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 4,
      characteristic_id: 7,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '',
      rating: 4,
      characteristic_id: 7,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '',
      rating: 3,
      characteristic_id: 7,
      created_at: new Date().toISOString()
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '',
      rating: 2,
      characteristic_id: 7,
      created_at: new Date().toISOString()
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '',
      rating: 1,
      characteristic_id: 7,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '18-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 4,
      characteristic_id: 8,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '28-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 4,
      characteristic_id: 8,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '38-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 5,
      characteristic_id: 8,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '48-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 2,
      characteristic_id: 8,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '48-This job provided me with the opportunity to work withamazing company with Work Satisfaction',
      rating: 2,
      characteristic_id: 8,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '19-This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 5,
      characteristic_id: 9,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '29-This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 4,
      characteristic_id: 9,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '39-This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 4,
      characteristic_id: 9,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 4,
      company_id: 2,
      review_text: '49-This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 3,
      characteristic_id: 9,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 5,
      company_id: 2,
      review_text: '59-This job provided me with the opportunity to work withamazing company with Managerial Support',
      rating: 2,
      characteristic_id: 9,
      created_at: new Date().toISOString()
  
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '110-This job provided me with the opportunity to work withamazing company with Diverse leadership',
      rating: 5,
      characteristic_id: 10,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '210-This job provided me with the opportunity to work withamazing company with Diverse leadership',
      rating: 5,
      characteristic_id: 10,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '310-This job provided me with the opportunity to work withamazing company with Diverse leadership',
      rating: 5,
      characteristic_id: 10,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '111-This job provided me with the opportunity to work withamazing company with Mentorship',
      rating: 5,
      characteristic_id: 11,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '211-This job provided me with the opportunity to work withamazing company with Mentorship',
      rating: 4,
      characteristic_id: 11,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '',
      rating: 5,
      characteristic_id: 11,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '112-This job provided me with the opportunity to work withamazing company with Team support',
      rating: 5,
      characteristic_id: 12,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '114-This job provided me with the opportunity to work withamazing company with Compensation',
      rating: 2,
      characteristic_id: 14,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '214-This job provided me with the opportunity to work withamazing company with Compensation',
      rating: 2,
      characteristic_id: 14,
      created_at: new Date().toISOString()
    },
    {
      user_id: 3,
      company_id: 2,
      review_text: '314-This job provided me with the opportunity to work withamazing company with Compensation',
      rating: 5,
      characteristic_id: 14,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '115-This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
      rating: 1,
      characteristic_id: 15,
      created_at: new Date().toISOString()
    },
    {
      user_id: 2,
      company_id: 2,
      review_text: '215-This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
      rating: 1,
      characteristic_id: 15,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '116-This job provided me with the opportunity to work withamazing company with Executive team',
      rating: 1,
      characteristic_id: 16,
      created_at: new Date().toISOString()
    },
    {
      user_id: 1,
      company_id: 2,
      review_text: '',
      rating: 5,
      characteristic_id: 17,
      created_at: new Date().toISOString()
    },
  ]);
};
