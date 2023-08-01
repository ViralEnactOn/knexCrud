const knex = require("./config");

knex
  .from("users")
  .select("name", "age")
  .orderBy("age", "desc")
  .then((rows) => {
    for (row of rows) {
      console.log(`${row["name"]} ${row["age"]}`);
    }
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
