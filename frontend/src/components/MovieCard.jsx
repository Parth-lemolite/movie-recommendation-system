import React from "react";
import MovieList from "./MovieList";

const MovieCard = (movie) => {
  return (
    <div className="card">
      <img src={movie.movieImage} alt={movie.title} />
      <div className="card-content">
        {console.log(movie, ">>>>>>>>>>>>10")}
        <p className="movie-name">{movie.title}</p>
        <p className="director">Directed by: {movie.director}</p>
        <p className="description">{movie.description}</p>
        <p className="duration">Duration: {movie.duration}</p>
        <p className="release-date">
          Release Date: {new Date(movie.releaseDate).toLocaleDateString()}
        </p>
        <p className="rating">Rating: {movie.rating}/10</p>
        <p className="year">Year: {movie.year}</p>
        <div className="movie-info">
          <p className="time">
            11:30 <span>14:45</span> 16:05 <span className="d3">3D</span> 18:40
            21:00 23:15
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
