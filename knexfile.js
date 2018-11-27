module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/personal_library'
  },
  production: {
    client: 'pg',
    connection: process.env.NODE_ENV || development
  }
};
