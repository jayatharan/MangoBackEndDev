const Property = require('../models/propertyModel');
const { BadRequestError } = require('../utils/errorHandler');

const propertyService = {
  
  async getAllProperties() {
    try {
        const allProperties = await Property.find();
        return allProperties;
    } catch (error) {
      throw new BadRequestError('Failed to get property availability');
    }
  },


  async getProperty(req) {
    try {
    let query = Property.findById(req.params.propertyId);
    const property = await query;
    if (!property) {
      return { message: 'Property not found' };
    }
    return property;
    } catch (error) {
      throw new BadRequestError('Failed to get Property');
    }
  },

};

module.exports = propertyService;
