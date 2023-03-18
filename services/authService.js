const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const { BadRequestError } = require('../utils/errorHandler');

const authService = {
  async registerUser(userData) {
    try {
      const { userName, email, password, phoneNumber } = userData;

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user object
      const user = new User({
        userName,
        email,
        password: hashedPassword,
        phoneNumber
      });

      // Save user to DB
      const newUser = await user.save();

      return newUser;
    } catch (error) {
      throw new BadRequestError('Failed to register user');
    }
  },

  async loginUser(userData) {
    const {  email, password} = userData;
    try {
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new BadRequestError('Invalid email or password');
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        throw new BadRequestError('Invalid email or password');
      }

      // Create token
      const payload = { userId: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { token };
    } catch (error) {
      throw new BadRequestError('Failed to login user');
    }
  },
};

module.exports = authService;
