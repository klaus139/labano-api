const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        const connected = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected: ${connected.connection.host}`.cyan.underline);

    }catch(error){
        console.log(error)
    }
};

module.exports = connectDB;