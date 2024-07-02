const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

userRouter.post("/", async (req, res, next) => {
  try{
    const {username, name, password} = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash
  });
  const savedUser = await user.save();
  res.status(201).json(savedUser);
  }catch(error){
    console.log('Error creating user', error);
    res.status(500).json({error:'Failed to create user'})
  }
});  


module.exports = userRouter;
