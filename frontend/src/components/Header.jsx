import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../App";

const Header = () => {
  const { setGenre, genre, handleSearch, setSearch } = useContext(MovieContext);

  const [markerPosition, setMarkerPosition] = useState(0);
  const [markerWidth, setMarkerWidth] = useState(0);

  useEffect(() => {
    const genreElements = document.querySelectorAll("#menu-box li");

    const selectedIndex = genre
      ? ["all", "comedy", "horror", "romance", "thriller", "drama"].indexOf(
          genre
        )
      : 0;

    const selectedElement = genreElements[selectedIndex];

    if (selectedElement) {
      const leftPosition = selectedElement.offsetLeft;
      const itemWidth = selectedElement.offsetWidth;
      setMarkerPosition(leftPosition);
      setMarkerWidth(itemWidth);
    }
  }, [genre]);

  return (
    <header>
      <nav>
        <p className="logo">
          <span> MERNFLIX</span>
        </p>

        <i className="fa fa-bars" id="menu"></i>

        <ul id="menu-box">
          <div
            className="marker"
            style={{ left: markerPosition, width: markerWidth }}
          ></div>
          <li
            onClick={() => setGenre("all")}
            className={genre === "all" ? "selected" : ""}
          >
            All
          </li>
          <li
            onClick={() => setGenre("Comedy")}
            className={genre === "Comedy" ? "selected" : ""}
          >
            Comedy
          </li>
          <li
            onClick={() => setGenre("Horror")}
            className={genre === "Horror" ? "selected" : ""}
          >
            Horror
          </li>
          <li
            onClick={() => setGenre("Romance")}
            className={genre === "Romance" ? "selected" : ""}
          >
            Romance
          </li>
          <li
            onClick={() => setGenre("Thriller")}
            className={genre === "thriller" ? "selected" : ""}
          >
            Thriller
          </li>
          <li
            onClick={() => setGenre("Drama")}
            className={genre === "drama" ? "selected" : ""}
          >
            Drama
          </li>
        </ul>
      </nav>
      <h2 className="movie-name">Welcome To MernFlix MoviesHub</h2>
      <div className="popular-movie-slider">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for movies..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" onClick={() => handleSearch()}>
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
