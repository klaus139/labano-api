const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { signupValidator } = require('../utils/validators');
const router = express.Router();

router.post('/register', signupValidator, registerUser);

router.post('/login', loginUser)

module.exports = router;