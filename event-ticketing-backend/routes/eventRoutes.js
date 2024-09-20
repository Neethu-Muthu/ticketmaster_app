const express = require("express");
const Event = require("../models/Event");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Get an event by ID
router.get("/api/events/:id", async (req, res) => {
  try {
    const event = await Event.findOne({ id: req.params.id });
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new event
router.post("/", async (req, res) => {
  const { name, date, location, image, cost, ticketsAvailable } = req.body;

  const event = new Event({
    name,
    date,
    location,
    image,
    cost,
    ticketsAvailable,
  });

  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Purchase tickets
router.post("/api/events/purchase/:eventId", async (req, res) => {
  const { selectedSeats } = req.body;

  try {
    const event = await Event.findOne({ id: req.params.eventId });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the selected seats are already sold out
    const alreadySoldSeats = selectedSeats.filter((seat) =>
      event.soldOutSeats.includes(seat)
    );

    if (alreadySoldSeats.length > 0) {
      return res.status(400).json({
        message: "Some of the selected seats are already sold out",
        alreadySoldSeats,
      });
    }

    // Ensure there are enough tickets available
    if (event.ticketsAvailable >= selectedSeats.length) {
      // Mark the seats as sold by adding them to the soldOutSeats array
      event.soldOutSeats = [...event.soldOutSeats, ...selectedSeats];
      event.ticketsAvailable -= selectedSeats.length;

      await event.save();
      return res.json({ message: "Tickets purchased successfully", event });
    } else {
      return res.status(400).json({ message: "Not enough tickets available" });
    }
  } catch (error) {
    console.error("Error during ticket purchase:", error);
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
