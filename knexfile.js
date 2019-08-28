localPbConnection = {
  host: "localhost",
  database: "Database",
  user: process.env.DB_USERS,
  password: process.env.DB_PASS
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./database/data.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./database/seeds" }
  },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL || localPbConnection,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
