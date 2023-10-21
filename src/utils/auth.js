const jwt = require('jsonwebtoken');

const signToken = (user) => {

  const token = jwt.sign({
    email: user.email,
    role: user.role
  }, process.env.JWT_KEY, { expiresIn: '12h' });
  return token;
};

const verifyToken = (token) => {
  const data = jwt.verify(token, process.env.JWT_KEY);
  return data;
};

module.exports = { signToken, verifyToken };
