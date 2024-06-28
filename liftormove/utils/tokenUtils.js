const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  // Generate a JWT token
  return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h', // Token expires in 1 hour
  });
};

const verifyToken = (token) => {
  try {
    // Verify the token
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid token');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
