module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'db',
      user: 'root',
      database: 'knex_test',
      password: 'admin',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
}
