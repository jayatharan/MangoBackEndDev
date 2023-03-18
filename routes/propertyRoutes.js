const express = require('express');
const router = express.Router();
const { getProperties,getProperty,availability, bookProperty } = require('../controllers/propertyController');
const {protect} = require('../middleware/authMiddleware');

// Get All Properties
router.get('/',getProperties);

// Get Property
router.get('/:propertyId',getProperty);

// Get property availability for a property and date range
router.get('/availability',availability);

// Book a property
router.post('/:propertyId/book',protect,bookProperty);

module.exports = router;
