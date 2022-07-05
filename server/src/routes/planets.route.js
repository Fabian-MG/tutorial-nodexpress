const express = require('express');

const { httpGetPlanets, httpGetPlanetById } = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetPlanets)
planetsRouter.get('/:id', httpGetPlanetById)

module.exports = planetsRouter;