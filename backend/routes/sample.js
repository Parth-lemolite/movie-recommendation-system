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

import express from "express";

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
router.get("/movies", (req, res) => {
  res.json(movies);
});

export default router;
