const {body, validationResult }= require('express-validator');
const Auth = require('../models/authModel');
//const bcrypt = require('bcrypt');
const apiError = require('../middleware/apiError');
const validatorResult = require('../middleware/validatorMiddleware');

const signupValidator = [
    body('name')
    .notEmpty()
    .withMessage('Please add your name')
    .isLength({max:15})
    .withMessage(
        "Name must be less than or equal to 15 characters"
    )
    .isLength({min: 3})
    .withMessage('name must be at least 3 charcters long'),
    body('email')
    .notEmpty()
    .withMessage('Please add your email')
    .isEmail()
    .withMessage('Email must be a valid email'),
    // .custom(async (email, {req}) => {
    //     //check if the user exist
    //     const user = await Auth.findOne({email: email})
    //     if(user){
    //         return Promise.reject(new Error('E-mail already in use'))
    //     }
    // }),
    body('password')
    .notEmpty()
    .withMessage('Passowr dmust not be empty')
    .isLength({min: 5})
    .withMessage('Password lenght must be at least 5 charcters'),
   
]

module.exports = {
    signupValidator,
}