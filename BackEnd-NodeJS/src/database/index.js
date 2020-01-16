import mongoose from 'mongoose';

class Database {
    constructor() {
        this.initMongoConnection();
    }

    initMongoConnection() {
        mongoose.set('useCreateIndex', true);
        this.mongoConnection = mongoose.connect(
            'mongodb+srv://omnistack:omnistack@oministack-lo98u.mongodb.net/devradar?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useFindAndModify: true,
                useUnifiedTopology: true,
            }
        );
    }
}

export default new Database();
