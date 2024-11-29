import React, { useContext } from "react";
import Header from "../components/Header";
import { MovieContext } from "../App";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="movie-card-section">
          {/* Movie Cards */}
          <div className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
              alt="The Mummy"
            />
            <div className="card-content">
              <p className="movie-name">The Mummy</p>
              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45</span> 16:05 <span className="d3">3D</span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
              alt="The Mummy"
            />
            <div className="card-content">
              <p className="movie-name">The Mummy</p>
              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45</span> 16:05 <span className="d3">3D</span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
              alt="The Mummy"
            />
            <div className="card-content">
              <p className="movie-name">The Mummy</p>
              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45</span> 16:05 <span className="d3">3D</span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCXgCV-ZNb3InBCTaLdED58dF6iZJxIvCOBurktiWxXrwGc8DB"
              alt="The Mummy"
            />
            <div className="card-content">
              <p className="movie-name">The Mummy</p>
              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45</span> 16:05 <span className="d3">3D</span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" />

            <div className="card-content">
              <p className="movie-name">Wonder Woman</p>

              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45 16:05</span> 18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZeZdWD3S9rSzfwlSsnqBWERtgBHR4h_6kHb_fR_6J-BObyxfK" />

            <div className="card-content">
              <p className="movie-name">Alien: Covenant</p>

              <div className="movie-info">
                <p className="time">
                  11:30<span className="d3">3D</span>{" "}
                  <span>
                    14:45 16:05<span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2TBaWUUMpmbhcnr0zypXQltqtQmW9wED_Y8bYrynL98MM1Wq" />

            <div className="card-content">
              <p className="movie-name">Baywatch</p>

              <div className="movie-info">
                <p className="time">
                  <span>
                    11:30 16:05<span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhEeDOpouHNg3A75Ngkgl-pQdWrr8ErxSuYCbb8-Tn7KcuD79" />

            <div className="card-content">
              <p className="movie-name">Pirates of the Caribbean</p>

              <div className="movie-info">
                <p className="time">
                  11:30{" "}
                  <span>
                    14:45<span className="d3">3D</span> 16:05
                    <span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NX1HzM5IkUhkwR1Yq7vkd9j5dqv0_Zaz5FCa2bzyJaUx9zOa" />

            <div className="card-content">
              <p className="movie-name">transformers 5</p>

              <div className="movie-info">
                <p className="time">
                  11:30 <span>14:45 16:05</span> 18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8wYlRSHxcAyi7TijH8FjeTLKcYsKi3qCzI8r_X0xKU8LkAn_" />

            <div className="card-content">
              <p className="movie-name">Planet of the Apes</p>

              <div className="movie-info">
                <p className="time">
                  11:30<span className="d3">3D</span>{" "}
                  <span>
                    14:45 16:05<span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <img src="https://www.movienewsletters.net/photos/NZL_105934R1.jpg" />

            <div className="card-content">
              <p className="movie-name">Dark Tower</p>

              <div className="movie-info">
                <p className="time">
                  <span>
                    11:30 16:05<span className="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ---movie-card--- */}
      </section>
    </div>
  );
};

export default Home;
