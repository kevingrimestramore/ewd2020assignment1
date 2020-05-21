import React , { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext'
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";

const FavoriteMoviesPage = props => {

  const { authToken } = useAuth();
  const context = useContext(MoviesContext);
  return (
    <>{authToken ? (
      <>
        <PageTemplate
          movies={context.favMovies}
          title={"Favorite Movies"}
          action={movie => <AddReviewButton movie={movie} />}
        />
      </>
      ) : (
        <Redirect to="/login" />)}</>
  );
}

export default FavoriteMoviesPage;