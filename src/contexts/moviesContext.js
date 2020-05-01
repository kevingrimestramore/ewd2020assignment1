import React, { useState, useEffect } from "react";
import StubAPI from "../api/stubAPI";
import { getMovies } from "../api/tmdb-api";

export const MoviesContext = React.createContext(null)

const MoviesContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = movieId => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      StubAPI.add(movies[index]);
      movies.splice(index, 1);
      return [...movies];
    });
  };
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  },[authenticated]);

  return (
    <MoviesContext.Provider
      value={{
        movies: movies,
        addToFavorites: addToFavorites,
        setAuthenticated: setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider