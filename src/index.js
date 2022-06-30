const express = require('express');
const { 
    findAllPlanets, 
    findPlanetById, 
    savePlanet,
    updatePlanet,
    deletePlanet
} = require('./models/planets.model');
const planetsRouter = require('./routes/planets.route');

const PORT = 8000;

const app = express();

app.use(express.json());

app.use('/planets', planetsRouter);

app.listen(PORT, () => {
    console.log(`Servidor listo en puerto ${PORT} 🚀`);
})