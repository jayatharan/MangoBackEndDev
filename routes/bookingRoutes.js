const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const { availability,bookProperty } = require('../controllers/bookingController');


// Get property availability for a property and date range
router.get('/availability',availability);

// Book a property
router.post('/:propertyId/book',protect,bookProperty);

module.exports = router;