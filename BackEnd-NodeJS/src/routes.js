import { Router } from 'express';
import DevController from './app/controllers/DevController';
import SearchController from './app/controllers/SearchController';

const routes = Router();

// DevController
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

// SearchController
routes.get('/search', SearchController.index);

module.exports = routes;
