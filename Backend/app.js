const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const eventRoutes = require("./routes/eventRoutes"); // Make sure the path is correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/ticketmaster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Register routes
app.use("/api/events", eventRoutes); // This registers your routes at /api/events

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
