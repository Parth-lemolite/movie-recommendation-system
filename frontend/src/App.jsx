import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
          <div class="search-container">
            <input
              type="text"
              class="search-bar"
              placeholder="Search for movies..."
            />
            <button class="search-button">Search</button>
          </div>
        </div>
      </header>

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
          <div class="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" />

            <div class="card-content">
              <p class="movie-name">Wonder Woman</p>

              <div class="movie-info">
                <p class="time">
                  11:30 <span>14:45 16:05</span> 18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSZeZdWD3S9rSzfwlSsnqBWERtgBHR4h_6kHb_fR_6J-BObyxfK" />

            <div class="card-content">
              <p class="movie-name">Alien: Covenant</p>

              <div class="movie-info">
                <p class="time">
                  11:30<span class="d3">3D</span>{" "}
                  <span>
                    14:45 16:05<span class="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2TBaWUUMpmbhcnr0zypXQltqtQmW9wED_Y8bYrynL98MM1Wq" />

            <div class="card-content">
              <p class="movie-name">Baywatch</p>

              <div class="movie-info">
                <p class="time">
                  <span>
                    11:30 16:05<span class="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>

          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXhEeDOpouHNg3A75Ngkgl-pQdWrr8ErxSuYCbb8-Tn7KcuD79" />

            <div class="card-content">
              <p class="movie-name">Pirates of the Caribbean</p>

              <div class="movie-info">
                <p class="time">
                  11:30{" "}
                  <span>
                    14:45<span class="d3">3D</span> 16:05
                    <span class="d3">3D</span>
                  </span>{" "}
                  18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NX1HzM5IkUhkwR1Yq7vkd9j5dqv0_Zaz5FCa2bzyJaUx9zOa" />

            <div class="card-content">
              <p class="movie-name">transformers 5</p>

              <div class="movie-info">
                <p class="time">
                  11:30 <span>14:45 16:05</span> 18:40 21:00
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8wYlRSHxcAyi7TijH8FjeTLKcYsKi3qCzI8r_X0xKU8LkAn_" />

            <div class="card-content">
              <p class="movie-name">Planet of the Apes</p>

              <div class="movie-info">
                <p class="time">
                  11:30<span class="d3">3D</span>{" "}
                  <span>
                    14:45 16:05<span class="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <img src="https://www.movienewsletters.net/photos/NZL_105934R1.jpg" />

            <div class="card-content">
              <p class="movie-name">Dark Tower</p>

              <div class="movie-info">
                <p class="time">
                  <span>
                    11:30 16:05<span class="d3">3D</span>
                  </span>{" "}
                  18:40 21:00 23:15
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ---movie-card--- */}
      </section>
    </>
  );
}

export default App;
