const express = require('express');
const path = require('path');
const cors = require('cors');

const { loadPlanetData } = require('./models/planets.model');

const planetsRouter = require('./routes/planets.route');

const whitelist = ['http://localhost:3000']

const publicPath = path.join(__dirname, '..', 'public');
const indexPath = path.join(__dirname, '..', 'public', 'index.html')

const PORT = 8000;

const app = express();

app.use(cors({
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== 1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

app.use(express.json());

app.use(express.static(publicPath));

app.use('/planets', planetsRouter);

app.get('/*', (req, res, next) => {
    try {
        res.sendFile(indexPath);
    } catch(err) {
        console.log('Error al servir cliente');
    }
})

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

startServer();