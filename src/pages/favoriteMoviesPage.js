import React from "react";
import StubAPI from "../api/stubAPI";
import PageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";

const FavoriteMoviesPage = props => {

  const { authToken } = useAuth();

  return (
    <>{authToken ? (
      <>
        <PageTemplate
          movies={StubAPI.getAll()}
          title={"Favorite Movies"}
          action={movie => <AddReviewButton movie={movie} />}
        />
      </>
    ) : (
        <Redirect to="/login" />)}</>
  );
    }
  export default FavoriteMoviesPage;