/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('company').insert([
    {
      id: 1,
      name: 'Google',
      info: 'Starting from two computer science students in a university dorm room, we now have over a hundred thousand employees and over one hundred offices around the world.',
      location: 'North America'
    },
    {
      id: 2,
      name: 'Amazon',
      info: 'All Amazon teams and businesses, from Prime delivery to AWS, are guided by four key tenets: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.',
      location: 'North America'
    },
    {
      id: 3,
      name: 'IBM',
      info: 'IBM works to design, advance, and scale the technologies that define each era. Restlessly reinventing since 1911, we are one of the largest technology, consulting and research companies in the world.',
      location: 'North America'
    },
    {
      id: 4,
      name: 'Meta',
      info: 'The Facebook company is now Meta. Meta builds technologies that help people connect, find communities, and grow businesses. ',
      location: 'North America'
    },
    {
      id: 5,
      name: 'TikTok',
      info: 'TikTok is the leading destination for short-form mobile video. Our mission is to inspire creativity and bring joy',
      location: 'North America'
    },
    {
      id: 6,
      name: 'Shopify',
      info: 'Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario.',
      location: 'Canada'
    },
    {
      id: 7,
      name: 'Spotify',
      info: 'Spotify is a proprietary Swedish audio streaming and media services provider founded on 23 April 2006 by Daniel Ek and Martin Lorentzon.',
      location: 'Sweden'
    },
    {
      id: 8,
      name: 'PayPal',
      info: 'PayPal Holdings, Inc. is an American multinational financial technology company operating an online payments system in the majority of countries.',
      location: 'California, U.S.'
    },
    {
      id: 9,
      name: 'Youtube',
      info: 'YouTube is an American online video sharing and social media platform headquartered in San Bruno, California.',
      location: 'California, U.S.'
    },
    {
      id: 10,
      name: 'Twitch',
      info: 'Twitch is an American video live streaming service that focuses on video game live streaming, including broadcasts of esports competitions.',
      location: 'California, U.S.'
    },
  ]);
  await Promise.all([1,2,3,4,5,6,7,8,9,10].map(() => knex.raw("SELECT nextval('company_id_seq') FROM company")));
};
