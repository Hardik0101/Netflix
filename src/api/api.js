import { apiEndpoint } from "./constant";
import createAxiosInstance from "./createInstance";

const axiosInstance = createAxiosInstance();

const moviesAPI = {
  async getPopularMovie() {
    try {
      const response = await axiosInstance.get(apiEndpoint.POPULAR_MOVIES);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },

  async getUpcomingMovie() {
    try {
      const response = await axiosInstance.get(apiEndpoint.UPCOMING_MOVIES);
      return response.data.results;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getMoviesTrailers(id) {
    try {
      const response = await axiosInstance.get(
        apiEndpoint.MOVIE_TRAILERS.replace("movie_id", id)
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getMoviesDetails(id) {
    try {
      const response = await axiosInstance.get(
        apiEndpoint.MOVIE_DETAILS.replace(":id", id)
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getMoviesCast(id) {
    try {
      const response = await axiosInstance.get(
        apiEndpoint.MOVIE_CAST.replace("movie_id", id)
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  async getRecommendationMovies(id) {
    try {
      const response = await axiosInstance.get(
        apiEndpoint.RECOMMENDATIONS.replace("movie_id", id)
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  async getMoviesByGenre(genreId) {
    try {
      const response = await axiosInstance.get(apiEndpoint.DISCOVER_MOVIE, {
        params: {
          with_genres: genreId,
        },
        timeout: 2000,
      });
      return response.data.results;
    } catch (error) {
      console.error(`Error fetching movies for genre ${genreId}:`, error);
      throw error;
    }
  },
};

export default moviesAPI;
