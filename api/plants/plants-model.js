const db = require("../data/db-config")

function getPlants() {
    return db("plants")
}

async function createPlant(plant) {
    const [plant_id] = await db("plants").insert(plant)
    return getPlants().where({ plant_id }).first();
}

module.exports = {
    getPlants,
    createPlant
}