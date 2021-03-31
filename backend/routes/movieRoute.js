import { getMovies, getMovieByTitle } from "../controllers/movieController.js";
import express from 'express'

const router = express.Router()


// express router method to create route for getting all movies
router.route('/').get(getMovies)

// express router method to create route for getting users by title
router.route('/:title').get(getMovieByTitle)

export default router;