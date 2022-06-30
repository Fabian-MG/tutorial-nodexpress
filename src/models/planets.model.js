let planets = [{
        id:1,
        name: 'Marte',
        diametro: 32,
        lunas: 4
    },
    {
        id:2,
        name: 'Venus',
        diametro: 90,
        lunas: 5
    },
    {
        id:3,
        name: 'Mercurio',
        diametro: 32,
        lunas: 4
    },
]

function findAllPlanets() {
    return planets
}

function findPlanetById(id) {
    const foundPlanet = planets.find((planet) => planet.id === id)
    return foundPlanet
}

function savePlanet(planet) {
    planets.push(planet);
}

function updatePlanet(id, body) {
    const planetIdx = planets.findIndex((planet) => planet.id === id)

    const planetToUpdate = planets[planetIdx]

    const updatedPlanet = {
        ...planetToUpdate,
        ...body
    }

    planets[planetIdx] = updatedPlanet

    return updatePlanet
}

function deletePlanet(id) {
    planets = planets.filter((planet) => planet.id !== id)
}

module.exports = { findAllPlanets, findPlanetById, savePlanet, updatePlanet, deletePlanet }