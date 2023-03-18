const Property = require('../models/propertyModel');
const propertyService = require('../services/propertyService');
const logger = require('../utils/logger');

exports.getProperties = async (req, res, next) => {
  try {
    const properties = await propertyService.getAllProperties();
    res.status(201).json({ properties });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }

};

exports.getProperty = async (req, res, next) => {
  try {
    const property = await propertyService.getProperty(req);
    res.status(201).json({ property });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }

};


exports.availability = async (req, res, next) => {
  try {
    await propertyService.propertyAvailability(req.body);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }

};

exports.bookProperty = async (req, res, next) => {
  try {
    const token = await propertyService.propertyBooking(req.body);
    res.status(200).json({ token });
  } catch (error) {
    logger.error(`Error while logging out user: ${error}`);
    next(error);
  }
};