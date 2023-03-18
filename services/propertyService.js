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

  async propertyAvailability(req) {
    try {
        const { property, startDate, endDate } = req.query;
        const properties = await Property.find({ property });
        const availableProperties = properties.filter(property => {
          const availability = property.availability.filter(avail => {
            return (new Date(avail.date) >= new Date(startDate) && new Date(avail.date) <= new Date(endDate) && avail.isAvailable);
          });
          return availability.length > 0;
        });
        return availableProperties;
    } catch (error) {
      throw new BadRequestError('Failed to get property availability');
    }
  },

  async propertyBooking(req) {
    try {
        const { propertyId } = req.params;
        const { guestName, checkinDate, checkoutDate, numGuests, propertyType, rateType, amenities } = req.body;
        const property = await Property.findById(propertyId);
        if (!property) {
          return res.status(404).json({ message: 'Property not found' });
        }
        const startDate = new Date(checkinDate);
        const endDate = new Date(checkoutDate);
        const availability = property.availability.filter(avail => {
          return (new Date(avail.date) >= startDate && new Date(avail.date) <= endDate && avail.isAvailable);
        });
        if (availability.length < 1) {
          return res.status(400).json({ message: 'Property not available for selected dates' });
        }
        // Update property availability for selected dates
        availability.forEach(avail => {
          avail.isAvailable = false;
        });
        await property.save();
        const booking = {
          guestName,
          checkinDate,
          checkoutDate,
          numGuests,
          propertyType,
          rateType,
          amenities,
          property: property._id
        };
        // TODO: Save booking to database
        return { message: 'Booking successful', booking };
    } catch (error) {
      throw new BadRequestError('Failed to Book Property');
    }
  },

};

module.exports = propertyService;
