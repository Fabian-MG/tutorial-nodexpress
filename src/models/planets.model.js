const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

let habitablePlanets = []

const dataFilePath = path.join(__dirname, '..', '..', 'data', 'kepler_data.csv');

function isHabitable(planet) {
    return (
        planet['koi_disposition'] === 'CONFIRMED' 
        && planet['koi_insol'] > 0.36
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6
    )
}

fs.createReadStream(dataFilePath)
    .pipe(
        parse({
            comment: '#',
            columns: true,
        })
    )
    .on('data', (planet) => {
        if(isHabitable(planet)) {
            console.log(planet);
            habitablePlanets.push(planet)
        }
    })
    .on('end', () => {
        console.log(`La cantidad de planetas habitables es: ${habitablePlanets.length}`);
    })

function findAllPlanets() {
    return planets
}

function findPlanetById(id) {
    const foundPlanet = planets.find((planet) => planet.id === id)
    return foundPlanet
}

module.exports = { findAllPlanets, findPlanetById }