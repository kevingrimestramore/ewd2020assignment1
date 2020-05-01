import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SiteHeader from './components/siteHeader';
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoriteMoviesPage';
import MovieReviewPage from './pages/movieReviewPage'
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'


const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>
          <GenresContextProvider>
            <Switch>
              <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
              <Route path="/movies/:id" component={MoviePage} />
              <Route path="/" component={HomePage} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route exact path="/reviews/form" component={AddMovieReviewPage} />
              <Redirect from="*" to="/" />
            </Switch>
            </GenresContextProvider>
          </MoviesContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));