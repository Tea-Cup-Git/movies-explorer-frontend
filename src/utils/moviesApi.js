const URL = 'https://api.nomoreparties.co/beatfilm-movies';

const handleResponse = (res) => (res.ok) ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

export const getMovies = () => {
  return fetch(URL).then((res) => handleResponse(res));
};
