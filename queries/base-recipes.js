const database = require("../database-connection");

module.exports = {
    list() {
        return database("baseRecipe").select();
    },
    read(id) {
        return database("baseRecipe")
            .select()
            .where("id", id)
            .first();
    },
    create(baseRecipe) {
        return database("baseRecipe")
            .insert(baseRecipe)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, baseRecipe) {
        return database("baseRecipe")
            .where("id", id)
            .update(baseRecipe, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("baseRecipe").where("id", id).del()
    }
};