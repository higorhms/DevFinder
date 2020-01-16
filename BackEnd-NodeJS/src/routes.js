import { Router } from 'express';
import DevController from './controllers/DevController';
import SearchController from './controllers/SearchController';

const routes = Router();

// DevController
routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

// SearchController
routes.get('/search', SearchController.index);

module.exports = routes;
