const express = require('express');
const router = express.Router();
const { getProperties,getProperty } = require('../controllers/propertyController');

// Get All Properties
router.get('/',getProperties);

// Get Property
router.get('/:propertyId',getProperty);



module.exports = router;
