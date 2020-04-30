import React from "react";
import "./movieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";

const MovieCard = ({movie, buttonHandler}) => {

  const handleAddToFavorites = e => {
    e.preventDefault();
    buttonHandler(movie.id); 
  };

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${movie.id}`}>
        <img
          className="card-img-tag center "
          alt={movie.title}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        
        <div className="card-body">
          <h4 className="card-title ">{movie.title}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
          <button type="button" className="btn w-100 btn-primary"
                onClick={handleAddToFavorites}
                >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard ;