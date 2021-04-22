import mongoose from 'mongoose'

const reqiredString = {
    type: String,
    required: true
}

const movieSchema = mongoose.Schema({
    title: reqiredString,
    genre: reqiredString,
    date_added: {
        type: Date,
        required: true
    },
})

//module.exports = mongoose.model('avengers', movieSchema)

var Movie = mongoose.model('Movie', movieSchema);

export default Movie;