import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const { authToken } = useAuth();
  return (
    <>{authToken?(
      <>
       <PageTemplate 
        title='All Movies'
        movies={context.movies}
        action={movie => <AddToFavoritesButton movie={movie} /> }
      />
      </>
    ):(
        <Redirect to="/login"    /> )}</>
  );
};

export default MovieListPage;