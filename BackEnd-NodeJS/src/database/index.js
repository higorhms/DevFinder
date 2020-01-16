import mongoose from 'mongoose';

class Database {
    constructor() {
        this.initMongoConnection();
    }

    initMongoConnection() {
        this.mongoConnection = mongoose.connect(
            'mongodb+srv://omnistack:omnistack@oministack-lo98u.mongodb.net/devradar?retryWrites=true&w=majority',
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
            }
        );
    }
}

export default new Database();
