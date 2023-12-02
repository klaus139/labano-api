const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db.js');
const globalErrHandler = require('./middleware/globalErrHandler.js');
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT;

//use functions in example

//middlewares
app.use(globalErrHandler);

//routes
const authRoutes = require('./routes/authRoutes.js');
const apiError = require('./middleware/apiError.js');
//const globalErrHandler = require('./middleware/globalErrHandler.js');
app.use('/api/auth', authRoutes);

app.all('*', (req, res, next) => {
    const err = new apiError(`Cant find this route ${req.originalUrl}`, 400);
    next(err);
})


app.listen(port, () => console.log(`server is running on port ${port}`));