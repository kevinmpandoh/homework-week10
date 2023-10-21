// controllers/authController.js
const AuthService = require('../services/auth.service');

const authController = {
    register: async (req, res) => {
        try {
            const user = await AuthService.registerUser(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    login: async (req, res) => {
        try {
            const token = await AuthService.loginUser(req.body);
            res.json({ token });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
};

module.exports = authController;
