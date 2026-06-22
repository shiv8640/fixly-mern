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
router.put("/accept/:id", async (req, res) => {
  try {

    const {
      providerId,
      providerName,
    } = req.body;

    const booking =
      await Booking.findByIdAndUpdate(
        req.params.id,
        {
          status: "Accepted",
          providerId,
          providerName,
        },
        { new: true }
      );

    res.json(booking);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
});

module.exports = router;