const knex = require("./config");

knex
  .from("users")
  .select("*")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["id"]} ${row["name"]} ${row["age"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
