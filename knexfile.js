// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: "localhost",
      port: 5432,
      database: 'jobculture',
      user:     'postgres',
      password: ''
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'jobculture',
      user:     'postgres',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
