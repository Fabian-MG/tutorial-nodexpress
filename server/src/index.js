const express = require('express');

const { loadPlanetData } = require('./models/planets.model');

const planetsRouter = require('./routes/planets.route');

const PORT = 8000;

const app = express();

app.use(express.json());

app.use('/planets', planetsRouter);

async function startServer() {
    await loadPlanetData();

    app.listen(PORT, () => {
        console.log(`
        ------------------------------------------
            Servidor listo en puerto ${PORT} 🚀
        ------------------------------------------
        `);
    })
}

startServer()