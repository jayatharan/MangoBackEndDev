const mongoose = require('mongoose');

const amenitySchema = mongoose.Schema({
  has_sea_view: { type: Boolean, required: true },
  has_lake_view: { type: Boolean },
  has_mountain_view: { type: Boolean, required: true },
  has_bathtub: { type: Boolean, required: true },
  has_balcony: { type: Boolean, required: true },
  floor_area: { type: Number, required: true },
  has_wifi: { type: Boolean, required: true },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Property'
  }
});

const locationSchema = mongoose.Schema({
  addr_line_1: { type: String, required: true },
  addr_line_2: { type: String },
  city: { type: String, required: true },
  postal_code: { type: String, required: true },
  country: { type: String, required: true },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Property'
  }
});

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  property: {
    type: String,
    enum: ['Mango Sun', 'Mango Sea', 'Mango Hills'],
    required: true
  },
  location:locationSchema,
  imageUrl:{
    type: String,
    required: true
  },
  amenity: amenitySchema,
  occupancy: {
    type: String,
    enum: ['Single', 'Double', 'Triple'],
    required: true
  },
  rates: {
    bedAndBreakfast: {
      type: Number,
      required: true
    },
    halfBoard: {
      type: Number,
      required: true
    },
    fullBoard: {
      type: Number,
      required: true
    }
  },
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;

