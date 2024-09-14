import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar";
import PurchaseForm from "./components/PurchaseForm";
import TicketConfirmation from "./components/TicketConfirmation";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, name: 'Concert A', date: '2024-09-20', venue: 'Stadium 1', available: true },
    { id: 2, name: 'Concert B', date: '2024-09-25', venue: 'Stadium 2', available: true },
    // add more events here
  ];

  const handleBuyNow = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col justify-center items-start h-screen p-4">
          <Routes>
            <Route path="/" element={
              <section className="w-full">
                {/* Event Banner */}
                <div className="bg-blue-700 text-white py-20 px-4 text-center">
                  <h1 className="text-6xl font-extrabold">
                    Event <span className="text-blue-300">Tickets</span>
                  </h1>
                </div>

                {/* Events List */}
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-6">Available Events</h2>
                  {events.map(event => (
                    <div key={event.id} className="border-2 border-blue-300 rounded p-4 mb-4">
                      <h3 className="text-xl font-bold">{event.name}</h3>
                      <p><strong>Venue:</strong> {event.venue}</p>
                      <p><strong>Date:</strong> {event.date}</p>
                      <button 
                        onClick={() => handleBuyNow(event)} 
                        className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                        Buy Now
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            } />
            <Route path="/ticket-confirmation" element={<TicketConfirmation />} />
          </Routes>
        </main>

        {/* Purchase Form Popup */}
        {showForm && <PurchaseForm event={selectedEvent} onClose={handleCloseForm} />}
      </div>
    </Router>
  );
}

export default App;
