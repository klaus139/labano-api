const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const connected = await mongoose.connect('mongodb+srv://labano:labano@cluster0.pnes9pe.mongodb.net/?retryWrites=true&w=majority');
        console.log(`MongoDB connected: ${connected.connection.host}`.cyan.underline);

    }catch(error){
        console.log(error)
    }
};

module.exports = connectDB;