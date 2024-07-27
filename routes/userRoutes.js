const express = require('express')
const userRouter = express.Router()
const {signup , logIn , getusers} =require('../controllers/userController')

userRouter.post("/signup", signup);
userRouter.post("/signin", logIn);
userRouter.get('/',getusers)

module.exports = userRouter