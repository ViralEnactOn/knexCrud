const knex = require("./config");

const users = [
  { name: "Ricky", age: 40 },
  { name: "Mylyn", age: 35 },
  { name: "Ricmonde", age: 8 },
  { name: "Sean", age: 7 },
  { name: "Miggy", age: 7 },
];

knex("users")
  .insert(users)
  .then(() => console.log("data inserted"))
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .finally(() => {
    knex.destroy();
  });
