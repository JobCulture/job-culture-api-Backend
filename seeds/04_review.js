/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').insert([
      {  user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work with Work-life balance',
        rating: 1,
        characteristic_id: 1
      },
     
      {  user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work with Diversity',
        rating: 1,
        characteristic_id: 2
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work with Trust',
        rating: 2,
        characteristic_id: 3
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Remote flexibility',
        rating: 2,
        characteristic_id: 4
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Inclusive environment',
        rating: 3,
        characteristic_id: 5
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
        rating: 3,
        characteristic_id: 6
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Growth opportunies',
        rating: 4,
        characteristic_id: 7
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Work Satisfaction',
        rating: 4,
        characteristic_id: 8
    
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Managerial Support',
        rating: 5,
        characteristic_id: 9
    
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Diverse leadership',
        rating: 5,
        characteristic_id: 10
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Mentorship',
        rating: 5,
        characteristic_id: 11
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Team support',
        rating: 4,
        characteristic_id: 12
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Collaborative environment',
        rating: 3,
        characteristic_id: 13
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
        rating: 2,
        characteristic_id: 14
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
        rating: 1,
        characteristic_id: 15
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Executive team',
        rating: 1,
        characteristic_id: 16
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Benefits & perks',
        rating: 2,
        characteristic_id: 17
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Interview process',
        rating: 3,
        characteristic_id: 19
      },
      {  user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work with Work-life balance',
        rating: 5,
        characteristic_id: 1
      },
     
      {  user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work with Diversity',
        rating: 4,
        characteristic_id: 2
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work with Trust',
        rating: 3,
        characteristic_id: 3
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Remote flexibility',
        rating: 2,
        characteristic_id: 4
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Inclusive environment',
        rating: 1,
        characteristic_id: 5
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
        rating: 1,
        characteristic_id: 6
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Growth opportunies',
        rating: 2,
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
        rating: 4,
        characteristic_id: 9
    
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Diverse leadership',
        rating: 5,
        characteristic_id: 10
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Mentorship',
        rating: 5,
        characteristic_id: 11
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Team support',
        rating: 4,
        characteristic_id: 12
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Collaborative environment',
        rating: 3,
        characteristic_id: 13
      },
      {
        user_id: 1,
        company_id: 1,
        review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
        rating: 2,
        characteristic_id: 14
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
        rating: 1,
        characteristic_id: 15
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Executive team',
        rating: 1,
        characteristic_id: 16
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Benefits & perks',
        rating: 2,
        characteristic_id: 17
      },
      {
        user_id: 2,
        company_id: 2,
        review_text: 'This job provided me with the opportunity to work withamazing company with Interview process',
        rating: 3,
        characteristic_id: 19
      },
        {  user_id: 3,
          company_id: 3,
          review_text: '',
          rating: 1,
          characteristic_id: 1
        },
       
        {  user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work with Diversity',
          rating: 2,
          characteristic_id: 2
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work with Trust',
          rating: 3,
          characteristic_id: 3
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Remote flexibility',
          rating: 4,
          characteristic_id: 4
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Inclusive environment',
          rating: 5,
          characteristic_id: 5
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
          rating: 1,
          characteristic_id: 6
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: '',
          rating: 2,
          characteristic_id: 7
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Work Satisfaction',
          rating: 3,
          characteristic_id: 8
      
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Managerial Support',
          rating: 4,
          characteristic_id: 9
      
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Diverse leadership',
          rating: 5,
          characteristic_id: 10
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Mentorship',
          rating: 1,
          characteristic_id: 11
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Team support',
          rating: 4,
          characteristic_id: 12
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Collaborative environment',
          rating: 3,
          characteristic_id: 13
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
          rating: 2,
          characteristic_id: 14
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
          rating: 1,
          characteristic_id: 15
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Executive team',
          rating: 1,
          characteristic_id: 16
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Benefits & perks',
          rating: 2,
          characteristic_id: 17
        },
        {
          user_id: 3,
          company_id: 3,
          review_text: 'This job provided me with the opportunity to work withamazing company with Interview process',
          rating: 3,
          characteristic_id: 19
        },
        {  user_id: 3,
          company_id: 4,
          review_text: '',
          rating: 1,
          characteristic_id: 1
        },
       
        {  user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work with Diversity',
          rating: 2,
          characteristic_id: 2
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work with Trust',
          rating: 4,
          characteristic_id: 3
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Remote flexibility',
          rating: 4,
          characteristic_id: 4
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Inclusive environment',
          rating: 5,
          characteristic_id: 5
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
          rating: 1,
          characteristic_id: 6
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: '',
          rating: 2,
          characteristic_id: 7
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Work Satisfaction',
          rating: 5,
          characteristic_id: 8
      
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Managerial Support',
          rating: 5,
          characteristic_id: 9
      
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Diverse leadership',
          rating: 5,
          characteristic_id: 10
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Mentorship',
          rating: 1,
          characteristic_id: 11
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Team support',
          rating: 4,
          characteristic_id: 12
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Collaborative environment',
          rating: 3,
          characteristic_id: 13
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
          rating: 2,
          characteristic_id: 14
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Personal/ vacation time',
          rating: 1,
          characteristic_id: 15
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Executive team',
          rating: 1,
          characteristic_id: 16
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Benefits & perks',
          rating: 2,
          characteristic_id: 17
        },
        {
          user_id: 3,
          company_id: 4,
          review_text: 'This job provided me with the opportunity to work withamazing company with Interview process',
          rating: 3,
          characteristic_id: 19
        },
        {  user_id: 4,
          company_id: 5,
          review_text: '',
          rating: 1,
          characteristic_id: 1
        },
       
        {  user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work with Diversity',
          rating: 2,
          characteristic_id: 2
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work with Trust',
          rating: 4,
          characteristic_id: 3
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: '',
          rating: 4,
          characteristic_id: 4
        },
        
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Young & fun environment',
          rating: 1,
          characteristic_id: 6
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: '',
          rating: 5,
          characteristic_id: 7
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Work Satisfaction',
          rating: 5,
          characteristic_id: 8
      
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Managerial Support',
          rating: 5,
          characteristic_id: 9
      
        },
       
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Mentorship',
          rating: 1,
          characteristic_id: 11
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Team support',
          rating: 4,
          characteristic_id: 12
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Collaborative environment',
          rating: 3,
          characteristic_id: 13
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Compensation',
          rating: 2,
          characteristic_id: 14
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Executive team',
          rating: 1,
          characteristic_id: 16
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Benefits & perks',
          rating: 2,
          characteristic_id: 17
        },
        {
          user_id: 4,
          company_id: 5,
          review_text: 'This job provided me with the opportunity to work withamazing company with Interview process',
          rating: 3,
          characteristic_id: 19
        },
  ]);
};
