import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { useAuth } from "../../contexts/authContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const {authUser} = useAuth();

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id,authUser);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;