/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('company').del()
  await knex('company').insert([
    {id: 1, 
      name: 'Google',
      info: 'Starting from two computer science students in a university dorm room, we now have over a hundred thousand employees and over one hundred offices around the world.',
      location: 'North America'
    },
    {id: 2, 
      name: 'Amazon',
      info: 'All Amazon teams and businesses, from Prime delivery to AWS, are guided by four key tenets: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.',
      location: 'North America'
    },
    {id: 3, 
      name: 'IBM',
      info: 'IBM works to design, advance, and scale the technologies that define each era. Restlessly reinventing since 1911, we are one of the largest technology, consulting and research companies in the world.',
      location: 'North America'
    },
    {id: 4, 
      name: 'Meta',
      info: 'The Facebook company is now Meta. Meta builds technologies that help people connect, find communities, and grow businesses. ',
      location: 'North America'
    },
    {id: 5, 
      name: 'TikTok',
      info: 'TikTok is the leading destination for short-form mobile video. Our mission is to inspire creativity and bring joy',
      location: 'North America'
    },
  ]);
};
