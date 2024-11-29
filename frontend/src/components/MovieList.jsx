import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard"; // Adjust the import path as necessary

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      title: "1",
      director: "neeraj pandey",
      rating: "5",
      genre: "action",
    },
  ]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://your-api-url/movies"); // Replace with your API URL
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <React.Fragment key={movie._id}>
          <MovieCard key={movie._id} movie={movie} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default MovieList;
