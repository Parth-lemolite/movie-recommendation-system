import React from "react";

const MovieCard = ({}) => {
  return (
    <div className="card">
      <img
        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
        alt="The Mummy"
      />
      <div className="card-content">
        <p className="movie-name">The Mummy</p>
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
