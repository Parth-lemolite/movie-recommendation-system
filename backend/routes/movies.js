/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get a list of movies
 *     description: Returns a list of movies
 *     responses:
 *       200:
 *         description: List of movies.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The movie ID.
 *                   title:
 *                     type: string
 *                     description: The title of the movie.
 *                   director:
 *                     type: string
 *                     description: The director of the movie.
 *                   year:
 *                     type: integer
 *                     description: The release year of the movie.
 */
/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Add a new movie
 *     description: Adds a new movie to the list.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the movie.
 *               director:
 *                 type: string
 *                 description: The director of the movie.
 *               year:
 *                 type: integer
 *                 description: The release year of the movie.
 *               genre:
 *                 type: string
 *                 description: The genre of the movie (e.g., Action, Drama, Comedy).
 *               rating:
 *                 type: number
 *                 format: float
 *                 description: The rating of the movie (0 to 10).
 *               description:
 *                 type: string
 *                 description: A brief description of the movie.
 *               languages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   description: The languages the movie is available in.
 *               duration:
 *                 type: string
 *                 description: The duration of the movie (e.g., 120 minutes).
 *               releaseDate:
 *                 type: string
 *                 format: date
 *                 description: The release date of the movie.
 *               movieImage:
 *                 type: string
 *                 format: uri
 *                 description: URL of the movie poster/image.
 *             required:
 *               - title
 *               - director
 *               - year
 *               - genre
 *               - rating
 *               - description
 *               - languages
 *               - duration
 *               - releaseDate
 *               - movieImage
 *     responses:
 *       201:
 *         description: Movie added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 movie:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The ID of the movie.
 *                     title:
 *                       type: string
 *                       description: The title of the movie.
 *                     director:
 *                       type: string
 *                       description: The director of the movie.
 *                     year:
 *                       type: integer
 *                       description: The release year of the movie.
 *                     genre:
 *                       type: string
 *                       description: The genre of the movie.
 *                     rating:
 *                       type: number
 *                       format: float
 *                       description: The rating of the movie.
 *                     description:
 *                       type: string
 *                       description: A brief description of the movie.
 *                     languages:
 *                       type: array
 *                       items:
 *                         type: string
 *                         description: The languages the movie is available in.
 *                     duration:
 *                       type: string
 *                       description: The duration of the movie.
 *                     releaseDate:
 *                       type: string
 *                       format: date
 *                       description: The release date of the movie.
 *                     movieImage:
 *                       type: string
 *                       format: uri
 *                       description: URL of the movie poster/image.
 *       400:
 *         description: Invalid input. The provided data does not match the expected format or is missing required fields.
 */

import express from "express";
import { Movies } from "../models/movies.js";
import Joi from "joi";

const router = express.Router();

const movieSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  genre: Joi.string().required(),
  rating: Joi.number().min(0).max(10).required(),
  // year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
  year: Joi.number().required(),
  description: Joi.string().required(),
  languages: Joi.array().items(Joi.string().required()).required(),
  duration: Joi.number().required(),
  releaseDate: Joi.date().required(),
  movieImage: Joi.string().uri().required(),
});

// Movies route
router.get("/movies", async (req, res) => {
  try {
    const search = req.query.s;
    const genre = req.query.genre;

    const filter = {};

    if (search) {
      filter.title = { $regex: new RegExp(search, "i") };
    }

    if (genre && genre !== "all") {
      filter.genre = genre;
    }
    console.log("180", filter);

    const movies = await Movies.find(filter).sort({ rating: -1 });
    return res
      .status(200)
      .json({ message: "Movies fetched successfully", movies });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

router.post("/movies", async (req, res) => {
  try {
    const { error } = movieSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const {
      title,
      director,
      genre,
      rating,
      year,
      description,
      languages,
      duration,
      releaseDate,
      movieImage,
    } = req.body;

    const newMovie = new Movies({
      title,
      director,
      genre,
      rating,
      year,
      description,
      languages,
      duration,
      releaseDate,
      movieImage,
    });
    const savedMovie = await newMovie.save();
    return res
      .status(201)
      .json({ message: "Movie added successfully", movies: savedMovie });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

export default router;
