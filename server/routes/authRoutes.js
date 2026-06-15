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
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({
      message: "User Registered Successfully",
    });

  } catch (error) {
    console.log(error);

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

    console.log("Email:", email);
    console.log("Password:", password);

    const user = await User.findOne({ email });

    console.log("User:", user);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    res.json({
      message: "Login Successful"
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;