const express = require('express');
const router = express.Router();
const passport = require('passport');
const { register, login } = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validator');

// Register new user
router.post('/register', validateRegister, register);
// Login user
router.post('/login', validateLogin, passport.authenticate('local', { session: false }), login);
// // Logout user
// router.post("/logout", logout);

module.exports = router;
