const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["customer", "provider"],
    default: "customer",
  },
    avatar: {
    type: String,
    default: "",
  },
  bio: {
  type: String,
  default: "",
},

experience: {
  type: Number,
  default: 0,
},

rating: {
  type: Number,
  default: 5,
},
});

module.exports = mongoose.model("User", userSchema);