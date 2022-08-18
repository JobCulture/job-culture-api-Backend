/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('characteristic').insert([
    {
      id: 1,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Work-life balance',
    },
    {
      id: 2,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Diversity',
    },
    {
      id: 3,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Trust',
    },
    {
      id: 4,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Remote flexibility',
    },
    {
      id: 5,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Inclusive environment',
    },
    {
      id: 6,
      group: 'Cultural workplace characteristics',
      type: 'Workplace Experience',
      name: 'Young & fun environment',
    },
    {
      id: 7,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Growth opportunies',
    },
    {
      id: 8,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Work Satisfaction',
    },
    {
      id: 9,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Managerial Support',
    },
    {
      id: 10,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Diverse leadership',
    },
    {
      id: 11,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Mentorship',
    },
    {
      id: 12,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Team support',
    },
    {
      id: 13,
      group: 'Cultural workplace characteristics',
      type: 'Personal Growth',
      name: 'Collaborative environment',
    },
    {
      id: 14,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Compensation',
    },
    {
      id: 15,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Personal/ vacation time',
    },
    {
      id: 16,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Executive team',
    },
    {
      id: 17,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Benefits & perks',
    },
    {
      id: 18,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Job security',
    },
    {
      id: 19,
      group: 'Traditional workplace characteristics',
      type: 'Traditional',
      name: 'Interview process',
    },
  ]);
};
