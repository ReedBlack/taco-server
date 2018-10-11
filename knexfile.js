module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/tacoDB"
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL
  }
};