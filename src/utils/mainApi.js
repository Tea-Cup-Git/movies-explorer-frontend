import { setToken } from './token';

const BASE_URL = 'https://api.lebedevadiploma.students.nomoredomains.work';

// const BASE_URL = 'http://localhost:3000';

const handleResponse = (res) => (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((res) => handleResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((res) => handleResponse(res))
    .then((data) => {
      if (data.token) {
        setToken(data.token);
        return data;
      }
    });
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then((res) => handleResponse(res))
    .then((data) => data);
};

export const setUser = (name, email, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({email, name})
  })
    .then((res) => handleResponse(res));
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'GET'
  })
    .catch((err) => console.log(err));
};

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => handleResponse(res));
};

export const addMovie = (token, movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then((res) => handleResponse(res));
};

export const deleteMovie = (token, movie) => {
  return fetch(`${BASE_URL}/movies/${movie.movieId}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  }).then((res) => handleResponse(res));
};
