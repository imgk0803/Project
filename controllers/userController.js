const User = require("../models/user");
const bcrypt = require('bcryptjs');
const generateToken=require('../utils/generateToken')

const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send('user exists'); // Add return to stop further execution
    }
    const saltround = 10;
    const hashpassword = await bcrypt.hash(password, saltround);
  

    const user = new User({
      ...req.body,
      password: hashpassword
    });
    const newUser = await user.save();
    if(!newUser){
      return res.send('user not created')
    }
    const token = generateToken(email);
    res.cookie('tok',token);
    return res.send('signed successfully')
    
  } catch (error) {
    return res.status(500).send('no product added');
  }
}

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.send('email not match'); // Add return to stop further execution
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.send("password not match"); // Add return to stop further execution
    }
    const token = generateToken(email);
    res.cookie("token", token);
    return res.send("Logged in!"); // Add return to stop further execution after sending response
  } catch (error) {
   console.error(error)
    return res.send(error);
  }
}
const getusers = async(req,res,next)=>{
  try{
    const user = await User.find()
    res.status(200).json(user)

  }
  catch(error){
           res.status(500).send('something wrong')
  }
}

module.exports = { signup, logIn, getusers};
