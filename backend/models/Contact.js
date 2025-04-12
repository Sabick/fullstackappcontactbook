const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a contact name"],
  },
  email: {
    type: String,
    required: [true, "Please add a contact email"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
  },
  designation: {
    type: String,
    required: [true, "Please add a designation"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
