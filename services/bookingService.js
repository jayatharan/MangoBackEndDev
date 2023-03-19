const { BadRequestError } = require('../utils/errorHandler');
const Booking = require('../models/bookingModel');

const bookingService = {
    async propertyAvailability(req) {
        try {
            const { property, startDate, endDate } = req.query;
            const properties = await Booking.find({ property });
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
            const property = await Booking.findById(propertyId);
            if (!property) {
              return res.status(404).json({ message: 'Booking not found' });
            }
            const startDate = new Date(checkinDate);
            const endDate = new Date(checkoutDate);
            const availability = property.availability.filter(avail => {
              return (new Date(avail.date) >= startDate && new Date(avail.date) <= endDate && avail.isAvailable);
            });
            if (availability.length < 1) {
              return res.status(400).json({ message: 'Booking not available for selected dates' });
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
          throw new BadRequestError('Failed to Book Booking');
        }
      },
}


module.exports = bookingService;
