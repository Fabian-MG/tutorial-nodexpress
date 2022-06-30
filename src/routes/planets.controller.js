function httpGetPlanets(req, res) {
    const planets = findAllPlanets();
    res.json(planets)
}

function httpGetPlanetById(req, res) {
    const id = +req.params.id
    const planet = findPlanetById(id);
    res.json(planet);
}

module.exports = { httpGetPlanets, httpGetPlanetById }