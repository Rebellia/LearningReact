import express from 'express';
const app = express();
const PORT = 3000;
//const cors = require("cors");
import cors from "cors";
import mongoose from 'mongoose'
//import movieModel from './movieModel'
import Movie from './movieModel.js'

const dbPath = `mongodb://127.0.0.1:27017/MovieDB`;
const router = express.Router();
//const movie = require('./movieModel');
app.use("/", router);

//Using the find() method to retrieve all documents from the details collection
router.route("/getMovies").get(function(request, ressponse) {
    Movie.find({}, function(err, result) {
      if (err) {
        response.send(err);
      } else {
        response.send(result);
      }
    });
  });

//Database connection
mongoose.connect(dbPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once("open", console.log(`Connection with MongoDB was successful`));

//Express js listen method to run project on http://localhost:5000
app.use(cors());
app.listen(PORT, console.log(`App is running in on port ${PORT}`));