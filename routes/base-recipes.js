const express = require('express');
const router = express.Router();

const queries = require('../queries/base-recipes');

router.get("/", (request, response, next) => {
    queries.list().then(baseRecipes => {
        response.json({baseRecipes});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(baseRecipes => {
        baseRecipes
            ? response.json({baseRecipes})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(baseRecipes => {
        response.status(201).json({baseRecipes: baseRecipes});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(baseRecipes => {
        response.json({baseRecipes: baseRecipes[0]});
    }).catch(next);
});

module.exports = router;
