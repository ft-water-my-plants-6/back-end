exports.seed = async function (knex) {
  await knex("users").insert([
    {
      username: "JELLY JIM JOE BOB",
      password: "save the world",
      phone: "4444444444444444",
    },
    {
      username: "Chaz Chezzerz",
      password: "ChezzyChaz",
      phone: "000000000000",
    },
  ]);
};
