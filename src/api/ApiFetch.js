import axios from "axios";

const API_KEY = "df4e888c43bec24422bfa0f9a44e5747";
const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_POPULAR_MOVIE = `${API_BASE_URL}movie/popular?api_key=${API_KEY}`;
const API_M_UPCOMING = `${API_BASE_URL}movie/upcoming?api_key=${API_KEY}`;
const API_MOVIES_DETAILS = `${API_BASE_URL}movie/:id?api_key=${API_KEY}`;
const API_MOVIES_TRAILERS = `${API_BASE_URL}movie/movie_id/videos?api_key=${API_KEY}`;

export async function getPopularMovie() {
  try {
    const response = await axios.get(API_KEY_POPULAR_MOVIE);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUpcomingMovie() {
  try {
    const response = await axios.get(API_M_UPCOMING);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMoviesTrailers(id) {
  try {
    const response = await axios.get(
      API_MOVIES_TRAILERS.replace("movie_id", id)
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMoviesByGenre(genreId) {
  try {
    const response = await axios.get(`${API_BASE_URL}discover/movie`, {
      params: {
        api_key: API_KEY,
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching movies for genre ${genreId}:`, error);
    throw error;
  }
}

export async function getComedyMovies() {
  return getMoviesByGenre(35);
}

export async function getRomanticMovies() {
  return getMoviesByGenre(10749);
}

export async function getThrillerMovies() {
  return getMoviesByGenre(53);
}

export async function getActionMovies() {
  return getMoviesByGenre(28);
}
