const mongoose = require('mongoose')

const dbPath = `mongodb://127.0.0.1:27017/MovieDB`

module.exports = async () => {
    await mongoose.connect(dbPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    return mongoose
}