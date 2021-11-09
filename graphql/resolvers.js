import { getMovies } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

// usually u have access to args object when you are sending argument from
// graphql

export default resolvers;
