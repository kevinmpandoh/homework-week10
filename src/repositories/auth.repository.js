const { User } = require('../models');
const { signToken } = require('../utils/auth');
// const bcrypt = require('bcrypt');

const AuthRepository = {
    register: async (userData) => {
        try {
            // const { username, email, password } = userData;
            // const hashedPassword = await bcrypt.hash(password, 10);
    
            // const newUser = await User.create({
            //     username,
            //     email,
            //     password: hashedPassword,
            // });

            const newUser = await User.create(userData);
    
            return { id: newUser.id, username: newUser.username, email: newUser.email };
        } catch (error) {
            throw error;
        }
    },
    
    login: async (userData) => {
        try {
            const { email, password } = userData;
            
            const user = await User.findOne({
                where: {
                    email,
                },
            });
    
            if (!user) {
                throw new Error('User not found');
            }
                
            // const isPasswordValid = await bcrypt.compare(password, user.password);
    
            // if (!isPasswordValid) {
            //     throw new Error('Invalid password');
            // }
            
            if (user.dataValues.password != password) {
                throw new Error('Invalid password');                
            }
    
            const token = signToken(user.dataValues);
    
            return { id: user.id, email: user.email, token };

        } catch (error) {
            throw error;
        }
    },
};

module.exports = AuthRepository;