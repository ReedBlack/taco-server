exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('baseRecipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('baseRecipe').insert([{
          id: 1,
          title: "",
          type: "",
          description: "",
          recipe: "",
          userName: "",
          userEmail: "",
          likes: 0
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE baseRecipe_id_seq RESTART WITH 4;")
    })
};