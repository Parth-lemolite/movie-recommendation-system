import express from "express";

const router = express.Router();

// Movies data
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

// GET /movies - Get all movies
router.get("/", (req, res) => {
  res.json(movies);
});

export default router;
