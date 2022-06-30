const express = require('express');
const { 
    findAllPlanets, 
    findPlanetById, 
    savePlanet,
    updatePlanet,
    deletePlanet
} = require('./models/planets.model');

const PORT = 8000;

const app = express();

app.use(express.json());

app.get('/planets', (req, res) => {
    const planets = findAllPlanets();
    res.json(planets)
})

app.post('/planets', (req, res) => {
    const planet = req.body    
    savePlanet(planet)
    res.status(201).json({
        message: "Planeta añadido correctamente"
    })
});

app.get('/planets/:id', (req, res) => {
    const id = +req.params.id
    const planet = findPlanetById(id);
    res.json(planet);
})

app.patch('/planets/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body

    const planet = updatePlanet(id, body)

    res.status(200).json(planet)
});

app.delete('/planets/:id', (req, res) => {
    const id = +req.params.id

    deletePlanet(id);

    res.status(200).json({
        message: "Planeta eliminado correctamente"
    })
})

app.listen(PORT, () => {
    console.log(`Servidor listo en puerto ${PORT} 🚀`);
})