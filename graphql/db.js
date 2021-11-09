export let movies = [
  {
    id: 1,
    name: "NOLAN",
    score: 1,
  },
  {
    id: 2,
    name: "Spiderman",
    score: 8,
  },
  {
    id: 3,
    name: "Lucy",
    score: 199,
  },
  {
    id: 4,
    name: "The Guy",
    score: 14,
  },
  {
    id: 5,
    name: "Yes man",
    score: 5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filterMovies = movies.filter((movie) => id === movie.id);
  return filterMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id != id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
