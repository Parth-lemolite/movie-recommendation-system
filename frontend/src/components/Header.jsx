import React from "react";
const Header = () => {
  return (
    <header>
      <nav>
        <p className="logo">
          <span> MERNFLIX</span>
        </p>

        <i className="fa fa-bars" id="menu"></i>

        <ul id="menu-box">
          <div className="marker"></div>
          <li>All</li>
          <li>Comedy</li>
          <li>Horror</li>
          <li>Romance</li>
          <li>Thriller</li>
          <li>Drama</li>
        </ul>
      </nav>
      <h2 className="movie-name">Welcome To MernFlix MoviesHub</h2>
      <div className="popular-movie-slider">
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for movies..."
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
