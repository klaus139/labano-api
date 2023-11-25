const Auth = require('../models/authModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400);
            throw new Error('Please add all fields');
        }

        const alreadyExist = await Auth.findOne({ email });
        if (alreadyExist) {
            res.status(400);
            throw new Error('User already exists');
        }
        

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        const newUser = await Auth.create({
            _id: uuidv4(), // Generate a UUID for the _id field
            name,
            email,
            password:hashedpassword,
        
        });

        if (newUser) {
            res.status(201).json({
                message: 'User created successfully',
                newUser,
                
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
};
