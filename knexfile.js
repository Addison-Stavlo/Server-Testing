// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./mainDB.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    }
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./testDB.db3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./migrations"
    }
  }
};
