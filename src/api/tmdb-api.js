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
    `/api/movies/${id}/reviews`,
    {headers: {
      'Authorization': window.localStorage.getItem('token')
   }
 }
)
    .then(res => res.json())
    .then(json => json.results);
};

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