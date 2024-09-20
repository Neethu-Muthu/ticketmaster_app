const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // UUIDs
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  cost: { type: String, required: true }, // Consider using Number if numeric
  ticketsAvailable: { type: Number, required: true },
  soldOutSeats: { type: [Number], default: [] }, // Store sold seats
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
