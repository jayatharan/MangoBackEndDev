const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

require('./config/passport')(passport);
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
const authRoutes = require('./routes/authRoutes');
const propertyRoutes = require('./routes/propertyRoutes');
// const bookingRoutes = require('./routes/bookings');

app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
// app.use('/api/bookings', bookingRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected')
  )
  .catch((err) => console.log(err));

module.exports = app;
