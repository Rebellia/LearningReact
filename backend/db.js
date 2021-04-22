//Might be obsolete

const mongoose = require('mongoose');
const dbPath = `mongodb://127.0.0.1:27017/MovieDB`;

mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});