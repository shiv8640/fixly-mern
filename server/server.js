require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bookingRoutes = require("./routes/bookingRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const authRoutes = require("./routes/authRoutes");

const User = require("./models/User");
const Service = require("./models/Service");

const app = express();
const PORT = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);


// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});


// Add Test User
app.get("/add", async (req, res) => {
  try {
    const newUser = new User({
      name: "Shivam",
    });

    await newUser.save();

    res.send("User Saved Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// Get All Users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/addservices", async (req, res) => {
  try {
    await Service.insertMany([
      { name: "Electrician", price: 499, description: "Electrical Repairs" },
      { name: "Plumber", price: 399, description: "Pipe Repair" }
    ]);

    res.send("Services Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// ✅ ONLY ONE SERVER START (IMPORTANT)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed:", err);
  });