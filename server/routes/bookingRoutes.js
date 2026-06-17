const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      message: "Booking Created",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
router.get("/", async (req, res) => {

  try {

    const bookings =
      await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;