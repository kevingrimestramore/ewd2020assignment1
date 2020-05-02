import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from '../components/reviewForm';
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";

const ReviewFormPage = props => {

  const { authToken } = useAuth();

  return (
    <>{authToken ? (
      <PageTemplate movie={props.location.state.movie}>
          <ReviewForm movie={props.location.state.movie} />
      </PageTemplate>
            ) : (
              <Redirect to="/login" />)}</>
        );
};
export default ReviewFormPage;