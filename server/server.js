
const bookingRoutes = require("./routes/bookingRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const User = require("./models/User");
const Service = require("./models/Service");

const serviceRoutes = require("./routes/serviceRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(
  "mongodb://fixlyadmin021:fixly10000@ac-t7gu2rx-shard-00-00.jgeitdg.mongodb.net:27017,ac-t7gu2rx-shard-00-01.jgeitdg.mongodb.net:27017,ac-t7gu2rx-shard-00-02.jgeitdg.mongodb.net:27017/?ssl=true&replicaSet=atlas-13hsu7-shard-0&authSource=admin&appName=fixly"
)
  .then(() =>
    console.log("MongoDB Connected")
  )
  .catch((err) => console.log(err));

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/auth", authRoutes);
app.use(
  "/api/bookings",
  bookingRoutes
);


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
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// Add Dummy Services
app.get("/addservices", async (req, res) => {
  try {
    await Service.insertMany([
      {
        name: "Electrician",
        price: 499,
        description: "Electrical Repairs",
      },
      {
        name: "Plumber",
        price: 399,
        description: "Pipe and Tap Repair",
      },
      {
        name: "Cleaner",
        price: 299,
        description: "Home Cleaning",
      },
      {
        name: "Painter",
        price: 599,
        description: "Wall Painting Service",
      },
      {
        name: "AC Repair",
        price: 699,
        description: "AC Installation and Repair",
      },
      {
        name: "Carpenter",
        price: 549,
        description: "Furniture Repair",
      },
    ]);

    res.send("Services Added Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
});


// Server Start
app.listen(5000, "0.0.0.0", () => {
  console.log("Server running");
});