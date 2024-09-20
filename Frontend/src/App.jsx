import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import AboutPage from "./components/AboutPage";
import EventDetailsPage from "./components/EventDetailsPage";
import Ticket from "./components/TicketPage";
import LoginPage from "./components/LoginPage";
import EventCreationPage from "./components/EventCreationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} /> {/* About page at root */}
        <Route path="/home" element={<Home />} /> {/* Home page route */}
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-event" element={<EventCreationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
