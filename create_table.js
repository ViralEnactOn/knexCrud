const knex = require("./config");

knex.schema
  .createTable("users", (table) => {
    table.increments("id");
    table.string("name");
    table.integer("age");
  })
  .then(() => console.log("table created"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
