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
 *             required:
 *               - title
 *               - director
 *               - year
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
 *                     id:
 *                       type: integer
 *                     title:
 *                       type: string
 *                     director:
 *                       type: string
 *                     year:
 *                       type: integer
 *       400:
 *         description: Invalid input.
 */

import express from "express";
import { Movies } from "../models/movies.js";

const router = express.Router();

const movies = [
  { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
  {
    id: 2,
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
  },
  {
    id: 3,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
  },
];

// Movies route
router.get("/movies", async (req, res) => {
  try {
    const search = req.query.s;
    const genre = req.query.genre;

    const filter = {};

    if (search) {
      filter.title = search;
    }
    if (genre !== "all") {
      filter.genre = genre;
    }

    const movies = await Movies.find(filter);
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

    if (
      !title ||
      !director ||
      !genre ||
      !rating ||
      !year ||
      !description ||
      !languages ||
      !duration ||
      !releaseDate ||
      !movieImage
    ) {
      return res.status(400).json({ message: "Bad request" });
    }
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
