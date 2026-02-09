const express = require("express");
const userModel = require("../models/schema");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const crypo = require("crypto")

authRouter.post("/register", async (req, res) => {
  const { name, password, email } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(409).json({
      message: "user already exists",
    });
  }

  const hash = crypo.createHash("md5").update(password).digest("hex")

  const user = await userModel.create({
    name,
    password:hash,
    email,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("JWT_Token", token);

  res.status(201).json({
    message: "user register succesfully",
    user,
    token,
  });
});

authRouter.post("/login",async(req,res)=>{
    const {password ,email} = req.body

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"user do not exists with this email "
        })
    }

    const pass = user.password === crypo.createHash("md5").update(password).digest("hex")

    if(!pass){
        return res.status(401).json({
            message:"user invalid"
        })
    }

    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)

    res.cookie("jwt-token" , token)

    res.status(200).json({
        message:"user logged in",
        user,
        token
    })
})

module.exports = authRouter;
