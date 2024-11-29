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

router.get("/", (req, res) => {
  res.json(movies);
});

export default router;
