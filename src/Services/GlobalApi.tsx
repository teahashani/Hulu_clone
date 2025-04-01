import axios from "axios";

const api_key = '2f48f73a4d614c9d277f34c0a29cc42a';
const baseURL = 'https://api.themoviedb.org/3';

const GlobalApi = {
    getPopularMovies: async () => {
        try {
            const response = await axios.get(`${baseURL}/movie/popular?api_key=${api_key}`);
            return response;
        } catch (error) {
            console.error("Error fetching popular movies:", error);
            throw error;
        }
    },
    getMovieByGenreId: async (id: number) => {
        try {
            const response = await axios.get(`${baseURL}/discover/movie?api_key=${api_key}&with_genres=${id}`);
            return response;
        } catch (error) {
            console.error("Error fetching movies by genre:", error);
            throw error;
        }
    }
}

export default GlobalApi;