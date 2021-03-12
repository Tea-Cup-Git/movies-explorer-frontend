import { setToken } from './token';
const BASE_URL = 'http://localhost:3000';

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
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    }
  })
    .catch((err) => console.log(err));
};
