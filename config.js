const option = {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "knexdb",
    },
  };
  
  const knex = require("knex")(option);
  
  module.exports = knex;