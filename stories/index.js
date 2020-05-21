import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import AddFavoriteButton from "../src/components/buttons/addToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import SiteHeader from "../src/components/siteHeader";
import ReviewForm from "../src/components/reviewForm";
import { Form, Input, Button, Logo, Card, Error } from "../src/components/loginComponents";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sample = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sample}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sample, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sample, sample, sample, sample, sample];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sample} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sample} />);

storiesOf("Home Page/Site Header", module).add("default", () => (
  <nav className="navbar  navbar-light fixed-top  bg-dark ">
    <nav className="navbar-brand text-white">
      <Link className=" text-white" to="/">
        TMDB Client
        </Link>
    </nav>
    <FontAwesomeIcon
      className="navbar-text text-light"
      icon={["fas", "video"]}
      size="3x"
    />
    <span className="navbar-text text-light">
      The Dodgy Masters Student's Answer to IMDB
      </span>
    <FontAwesomeIcon
      className="navbar-text text-light"
      icon={["fas", "film"]}
      size="3x"
    />
    <nav className="navbar navbar-expand ">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
            </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/movies/favorites">
            Favorites
            </Link>
        </li>
      </ul>
    </nav>
  </nav>
));

storiesOf("Submit Review Page/ReviewForm", module).add("default", () => (
  <ReviewForm />
));

storiesOf("Login Page/Enter Credentials (Login)", module).add("default", () => (
  <Card>
    <Form>
      <Input
        type="username"
        placeholder="username"
      />
      <Input
        type="password"
        placeholder="password"
      />
      <Button>Sign In</Button>
    </Form>
  </Card>
));

storiesOf("Login Page/Create Credentials (Signup)", module).add("default", () => (
  <Card>

    <Form>
      <Input type="username"
        placeholder="username" />
      <Input type="password"
        placeholder="password" />
      <Input type="password"
        placeholder="password again" />
      <Button >Sign Up</Button>
    </Form>
  </Card>
));

storiesOf("Movie Details Page/Review Table", module).add("default", () => (
  <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        <th scope="col">Author</th>
        <th scope="col">Excerpt</th>
        <th scope="col">More</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td></td>
        <td></td>
        <td>
          {" "}
        </td>
      </tr>

    </tbody>
  </table>
));

storiesOf("Movie Details Page/Full Review", module).add("default", () => (
  <>
    <p>Review By: </p>
    <p>Content </p>
  </>
));

storiesOf("Submit Review Page/My Reviews Table", module).add("default", () => (
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
));