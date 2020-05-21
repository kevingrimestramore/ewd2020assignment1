import React, { useContext } from "react";
import { useAuth } from "../contexts/authContext";
import { Redirect} from "react-router-dom";
import {MoviesContext} from "./../contexts/moviesContext";

const MyReviewsPage = props => {

  const { authToken } = useAuth();
  const context = useContext(MoviesContext);

  const deleteReview = e => {
    e.preventDefault();
    context.deleteReview();
  };


  return (
    <>{authToken ? (
                <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Movie Title</th>
          <th scope="col">Review</th>
          <th scope="col">Delete?</th>
        </tr>
      </thead>
      <tbody>
              <tr>
                <td>Title of Movie Placeholder</td>
                <td>Review Content Placeholder</td>
                <td>
                  {" "}
                  <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={deleteReview}
    >
      Delete This Review
    </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
            ) : (
              <Redirect to="/login" />)}</>
        );
};
export default MyReviewsPage;