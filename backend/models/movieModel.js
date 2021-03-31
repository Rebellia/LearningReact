import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
    },
    addedBy: {
        type: String,
        required: true,
    },
}, {
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

var Movie = mongoose.model('Movie', movieSchema);

export default Movie;