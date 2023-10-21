const { Movie } = require('../models');

const MovieRepository = {
    findAll: async () => {
        return Movie.findAll();
    },

    findById: async (id) => {
        return Movie.findByPk(id)
    },

    create: async (movieData) => {
        return Movie.create(movieData)
    },

    update: async (id, movieData) => {
        return Movie.update(movieData, {
            where: {
                id
            }
        })
    },

    delete: async (id) => {
        return Movie.destroy({
            where: {
                id
            }
        })
    },

    upload: async (id, fileName) => {
        return Movie.update({photo: fileName}, 
            {
                where: {
                    id
                }
            }
        )
    }
}

module.exports = MovieRepository