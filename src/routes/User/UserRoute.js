const express = require('express');
const {RegisterUser,fetchUsers} = require('../../controllers/users/Userctrl')

const userRoute = express.Router();

userRoute.post('/register',RegisterUser)
userRoute.get('/',fetchUsers)

module.exports = userRoute;