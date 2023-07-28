const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      pool: {
        min: 0,
        max: 2,
        acquireTimeoutMillis: 60000,
        createTimeoutMillis: 60000,
        destroyTimeoutMillis: 20000,
        idleTimeoutMillis: 60000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 1000,
      },
      debug: false,
    },
  };
};
