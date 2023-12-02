const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    // _id:{
    //     type:String,
    // },
    name:{
        type:String,
        //required:[true, 'Please add your name'],
    },
    email:{
        type: String,
        //required:[true, 'Please add your email'],
        unique: true,
    },
    password: {
        type: String,
        
        //required:[true, 'please add your password'],
    },
   
   


}, {
    timestamps: true,
})

module.exports = mongoose.model('Auth', authSchema);