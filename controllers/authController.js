const authService = require('../services/authService');
const logger = require('../utils/logger');

exports.register = async (req, res, next) => {
  try {
    await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully' ,status:'success' });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }

};

exports.login = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body);
    res.status(200).json({ token,status:'success' });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }
};