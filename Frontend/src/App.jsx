import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import the Home component
import AboutPage from "./components/AboutPage";
import EventDetailsPage from "./components/EventDetailsPage";
import Ticket from "./components/TicketPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutPage />} /> {/* About page at root */}
        <Route path="/home" element={<Home />} /> {/* Home page route */}
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/ticket" element={<Ticket />} />
       
      </Routes>
    </Router>
  );
};

export default App;
