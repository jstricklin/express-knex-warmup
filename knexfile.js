// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/express-knex-wrmp'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
