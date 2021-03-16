export const searchByKeyword = (movies, keyword = '', isIncludesShort) => {
  const minDuration = isIncludesShort ? 0 : 40;

  return movies.filter(
    (movie) => (keyword ? movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) : true)
      && movie.duration > minDuration,
  );
};

export const timeConversion = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
};

export const moviesConversion = (movies, BASE_URL) => movies.map((movie) => {
  const conversedMovie = {
    ...movie,
    movieId: movie.id,
    image: movie.image ? (BASE_URL + movie.image.url) : '',
    thumbnail: movie.image ? (BASE_URL + movie.image.formats.thumbnail.url) : '',
    trailer: movie.trailerLink,
  };
  return conversedMovie;
});