import Movie from '../models/movieModel.js'
import express from 'express'
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'

//getMovies function to get all movies
export const getMovies = asyncHandler(async(req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
})

//getMovieByTitle function to retrieve user by title
export const getMovieByTitle = asyncHandler(async(req, res) => {
    const movie = await Movie.findByTitle(req.params.title)

    //if Movie title match param title send Movie else throw error
    if(movie){
        res.json(movie)
    }else{
        res.status(404).json({message: "Movie not found"})
        res.status(404)
        throw new Error('Movie not found')
    }
})