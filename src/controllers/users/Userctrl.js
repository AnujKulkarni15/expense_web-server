const User = require('../../model/User')
const expressAsyncHandler = require('express-async-handler');

const RegisterUser =  expressAsyncHandler(async(req,res) => {

  const {email, firstname, lastname, password} = req?.body;

  // check if user exists or not
  // if(UserExist){
  //   res.json("User exist")
  // }
  const UserExist = await User.findOne({email});
  if (UserExist) throw new Error('user already exist');

  try{
    const user = await User.create({email, firstname, lastname, password})
    res.status(200).json(user)
  }
  catch(error){
    res.json(error)
  }
})


// fetch All Users

const fetchUsers = expressAsyncHandler(async(req,res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } 
  catch (error) {
    res.json(error)  
  }
})

module.exports = {RegisterUser,fetchUsers};