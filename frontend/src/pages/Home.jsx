import React, { useContext } from "react";
import Header from "../components/Header";
import { MovieContext } from "../App";
import moment from "moment";

const Home = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      <Header />
      <section>
        <div className="movie-card-section">
          {movies.map((i) => {
            return (
              <div className="card">
                <img src={i.movieImage} />

                <div className="card-content">
                  <p className="movie-name">{i.title}</p>

                  <div className="movie-info">
                    <p className="time">
                      {moment(i.releaseDate).format("Do MMM YYYY")}
                      <i
                        className="fa-solid fa-clock"
                        style={{ marginLeft: "10px" }}
                      ></i>
                      <span style={{ marginLeft: "5px" }}>{i.duration}</span>{" "}
                      <span
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "yellow" }}
                        ></i>

                        <span
                          className=""
                          style={{
                            marginLeft: "5px",
                          }}
                        >
                          {i.rating}
                        </span>
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* ---movie-card--- */}
      </section>
    </div>
  );
};

export default Home;
