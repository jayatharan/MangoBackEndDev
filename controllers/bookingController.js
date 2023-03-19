const bookingService = require('../services/bookingService');
const logger = require('../utils/logger');

exports.availability = async (req, res, next) => {
    try {
      await bookingService.propertyAvailability(req.body);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      logger.error(`Error while logging out user: ${error}`);
      next(error);
    }
  
  };
  
  exports.bookProperty = async (req, res, next) => {
    try {
      const token = await bookingService.propertyBooking(req.body);
      res.status(200).json({ token });
    } catch (error) {
      logger.error(`Error while logging out user: ${error}`);
      next(error);
    }
  };