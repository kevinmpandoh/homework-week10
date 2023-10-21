// services/authService.js
const AuthRepository = require('../repositories/auth.repository');

const AuthService = {
    registerUser: async (userData) => {
        return AuthRepository.register(userData);
    },

    loginUser: async (userData) => {
        return AuthRepository.login(userData);
    },
};

module.exports = AuthService;