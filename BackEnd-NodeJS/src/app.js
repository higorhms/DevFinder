const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

class App {
    constructor() {
        this.server = express();

        mongoose.connect(
            'mongodb+srv://omnistack:omnistack@oministack-lo98u.mongodb.net/devradar?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

module.exports = new App().server;
