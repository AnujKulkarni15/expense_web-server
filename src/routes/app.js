const express = require('express');
const dbconnect = require('../config/dbconnect');
const dotenv = require('dotenv');
const app = express();
const {RegisterUser} = require('../controllers/users/Userctrl');
const UserRoute = require('../routes/User/UserRoute');
const userRoute = require('../routes/User/UserRoute');
const {errorHandler,notFound} = require('../middleware/errormiddleware');

// env
dotenv.config();


// dbConnect
dbconnect();

// middleware
app.use(express.json())


// Routes

// app.post('/register',RegisterUser)
app.use('/api/users',userRoute)
 
app.use(notFound);
app.use(errorHandler);




module.exports = app;


// password : CrNBG8aRLjfwmsVU
// mongodb+srv://expense:<password>@expensess-tracker.xatdsck.mongodb.net/?retryWrites=true&w=majority&appName=expensess-tracker