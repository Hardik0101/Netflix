import moviesAPI from "./api";

export const fetchPopularMovies = async () => {
  try {
    const popularMovies = await moviesAPI.getPopularMovie();
    return popularMovies;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const upcomingMovies = await moviesAPI.getUpcomingMovie();
    return upcomingMovies;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
  }
};

export const fetchMovieTrailers = async (id) => {
  try {
    const moviesTrailers = await moviesAPI.getMoviesTrailers(id);
    return moviesTrailers;
  } catch (error) {
    console.error("Error fetching trailers movies:", error);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const moviesDetails = await moviesAPI.getMoviesDetails(id);
    return moviesDetails;
  } catch (error) {
    console.error("Error fetching Details movies:", error);
  }
};

export const fetchRecommendation = async (id) => {
  try {
    const moviesDetails = await moviesAPI.getRecommendationMovies(id);
    return moviesDetails;
  } catch (error) {
    console.error("Error fetching Details movies:", error);
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const moviesCast = await moviesAPI.getMoviesCast(id);
    return moviesCast;
  } catch (error) {
    console.error("Error fetching Cast movies:", error);
  }
};

export const getComedyMovies = async () => {
  return await moviesAPI.getMoviesByGenre(35);
};

export const getRomanticMovies = async () => {
  return moviesAPI.getMoviesByGenre(10749);
};

export const getThrillerMovies = async () => {
  return moviesAPI.getMoviesByGenre(53);
};

export const getActionMovies = async () => {
  return moviesAPI.getMoviesByGenre(28);
};
