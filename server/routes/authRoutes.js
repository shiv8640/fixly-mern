const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


// ======================
// REGISTER
// ======================
router.post("/register", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      bio,
      experience,
    } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      bio,
      experience,
    });

    await newUser.save();

    // Generate JWT Token
    const token = jwt.sign(
      {
        userId: newUser._id,
        role: newUser.role,
      },
       process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Response
    res.status(201).json({
  message: "User Registered Successfully",
  token,
  user: {
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
    bio: newUser.bio,
    experience: newUser.experience,
    rating: newUser.rating,
  },
});

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});


// ======================
// LOGIN
// ======================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // Generate JWT
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Success Response
   res.status(200).json({
  message: "Login Successful",
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    bio: user.bio,
    experience: user.experience,
    rating: user.rating,
  },
});

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;