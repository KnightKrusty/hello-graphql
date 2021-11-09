import { getMovies, getById, addMovie, deleteMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

// usually u have access to args object when you are sending argument from
// graphql

export default resolvers;
