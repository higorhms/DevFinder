const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// DevController
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

// SearchController
routes.get('/search', SearchController.index);

module.exports = routes;
