const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT;

//routes
app.use('/api/v1', require('./routes/authRoutes'));


app.listen(port, () => console.log(`server is running on port ${port}`));