import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

export const MovieContext = createContext({});
function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:9000/movies?s=${search}&genre=${genre}`
      );

      const result = await response.json();
      console.log("result:>", result);

      setMovies(result.movies);
    } catch (error) {
      console.log("error while getting movies 22:>");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [genre]);

  return (
    <Router>
      <MovieContext.Provider
        value={{ search, setSearch, genre, setGenre, movies }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/admin" element={<Home />}></Route>
        </Routes>
      </MovieContext.Provider>
    </Router>
  );
}

export default App;
