const MovieService = require('../services/movie.service');

const movieController = {
    getAll: async (req,res) => {
        try {
            const movies = await MovieService.getAllMovies();
            res.json(movies)
        } catch (error) {
            res.status(500).json({
                error: "Internal server error"
            })
        }
    },

    getMovieDetail: async (req, res) => {
        try {
            const movie = await MovieService.getMovieById(req.params.id);
            if (movie) {
                res.json(movie);
            } else {
                res.status(404).json({ error: 'Movie not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    createMovie: async (req, res) => {
        try {
            const newMovie = await MovieService.createMovie(req.body);
            res.json(newMovie)
        } catch (error) {
            res.status(500).json({
                error: "Internal server error"
            })
        }
    },

    updateMovie: async (req, res) => {
        try {
            const updatedMovie = await MovieService.updateMovie(req.params.id, req.body);
            res.status(200).json({
                updatedMovie                
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: "Internal server error"
            })
        }
    },

    deleteMovie: async (req, res) => {
        try {
            await MovieService.deleteMovie(req.params.id);
            res.status(200).json({
                message: "Movie delete successfully"                
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                error: "Internal server error"
            })
        }
    },

    uploadMovieImage: async (req, res) => {
        try {
            if (req.file) {
                const movieId = req.params.id;
                const imagePath = req.file.path;

                console.log(req.file)

                await MovieService.uploadMovie(movieId, req.file.filename);

                res.json({ message: 'Image uploaded successfully', imagePath });
            } else {
                res.status(400).json({ error: 'No image file provided' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = movieController;