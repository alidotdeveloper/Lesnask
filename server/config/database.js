module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    settings: {
      filename: env("DATABASE_FILENAME", ".tmp/data.db"),
    },
    options: {
      useNullAsDefault: true,
    },
  },
});
