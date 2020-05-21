import React, { useState, useEffect } from "react";
import {addFavorite, getMovies, getFavorites, addReview, deleteReview} from "../api/tmdb-api";

export const MoviesContext = React.createContext(null)

const MoviesContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [addReview, deleteReview] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (movieId, user) => {
    setMovies(movies => {
      const index = movies.map(m => m.id).indexOf(movieId);
      addFavorite(movies[index], user);
      favMovies.push(movies[index])
      movies.splice(index, 1);
      return [...movies];
    });
  };
  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  },[authenticated]);

  // 
  /*
  getFavorites(localStorage.getItem("user")).then(favMovies => {
    console.log("Favorite movies" + favMovies)
    setFavMovies(favMovies);
    favMovies.forEach(favMovie => {
      const index = movies.map(m => m.id).indexOf(favMovie.id);
      movies.splice(index, 1);
    })
    setMovies([...movies])
  })

})
}, [authenticated]);
*/

  return (<MoviesContext.Provider value = {
      {
        movies,
        favMovies,
        addToFavorites,
        setAuthenticated,
        addReview,
        deleteReview
      }
    }>
    {
      props.children
    } </MoviesContext.Provider>
  );
};

export default MoviesContextProvider