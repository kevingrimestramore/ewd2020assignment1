export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

export const getMovie = id => {
  return fetch(
    `/api/movies/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
  }
  ).then(res => res.json());
};

export const getGenres = () => {
  return fetch(
    `/api/genres`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
)
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieReviews = id => {
  return fetch(
    //
    //
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => {
      console.log(json) 
      return json.results
    })};

    /*
        `/api/movies/${id}/reviews`,
    {headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
)
    .then(res => res.json())
    .then(json => json.results);
};
    */

export const login = (username, password) => {
 return fetch('/api/users', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
    method: 'post',
    body:  JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register',{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({username: username, password: password })
  }).then(res => res.json())
};

export const addFavorite = (movie,user) =>
{
  return fetch(`/api/users/${user}/favorites`,{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(movie)
  }).then(res => res.json())
}

export const getFavorites = (user) =>
{
  return fetch(`/api/users/${user}/favorites`).then(res => res.json())
}

export const addReview = (data) =>
{
  const {movieId,author,content} = data
  return fetch(`/api/movies/${movieId}/reviews`,{
    headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({author,content})
  }).then(res => res.json())
}

export const deleteReview = (data) =>
{
  const {movieId,author,content} = data
  return fetch(`/api/movies/${movieId}/reviews`,{
    headers: {
      'Authorization': window.localStorage.getItem('token'),
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'delete',
    body: JSON.stringify({author,content})
  }).then(res => res.json())
}