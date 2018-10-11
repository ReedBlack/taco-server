exports.up = function (knex, Promise) {
    return knex.schema.createTable("baseRecipe", table => {
        table.increments('id')
        table.text('title')
        table.text('type')
        table.text('description')
        table.text('recipe')
        table.text('userName')
        table.text('userEmail')
        table.integer('likes')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('baseRecipe')
};