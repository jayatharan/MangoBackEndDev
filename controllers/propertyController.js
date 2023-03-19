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


