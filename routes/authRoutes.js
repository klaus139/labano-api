const express = require('express');
const { registerUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);

router.post('/login', (req, res) => {
    res.status(200).json({
        message: 'login successful'
    })
})

module.exports = router;