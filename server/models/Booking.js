const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    serviceName: String,

    bookingDate: String,

    bookingTime: String,

    address: String,

    amount: Number,

    paymentMethod: String,

    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);