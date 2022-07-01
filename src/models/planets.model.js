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

function loadPlanetData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(dataFilePath)
        .pipe(
            parse({
                comment: '#',
                columns: true,
            })
        )
        .on('data', (planet) => {
            if(isHabitable(planet)) {
                habitablePlanets.push(planet)
            }
        })
        .on('error', (err) => {
            console.log(err.message);
        })
        .on('end', () => {
            console.log(`Total planets: ${habitablePlanets.length}`);
            resolve(habitablePlanets)
        })
    })
}


function findAllPlanets() {
    return habitablePlanets
}

function findPlanetById(id) {
    const foundPlanet = habitablePlanets.find((planet) => planet.id === id)
    return foundPlanet
}

module.exports = { loadPlanetData, findAllPlanets, findPlanetById }