const MovieRepository = require('../repositories/movie.repository')

const MovieService = {
    getAllMovies: async () => {
        return MovieRepository.findAll();
    },

    getMovieById: async (id) => {
        return MovieRepository.findById(id)
    },

    createMovie: async (movieData) => {
        return MovieRepository.create(movieData);
    },

    updateMovie: async (id, movieData) => {
        return MovieRepository.update(id, movieData);
    },

    deleteMovie: async (id) => {
        return MovieRepository.delete(id)
    },

    uploadMovie: async (id, fileName) => {
        return MovieRepository.upload(id, fileName)
    }
}

module.exports = MovieService;