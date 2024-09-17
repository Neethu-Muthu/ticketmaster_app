import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import PurchaseForm from "./components/PurchaseForm";
import TicketConfirmation from "./components/TicketConfirmation";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },
    {
      id: 2,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },
    {
      id: 3,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },

    {
      id: 4,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },

    {
      id: 5,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },

    {
      id: 6,
      name: "Concert A",
      date: "2024-09-20",
      venue: "Stadium 1",
      available: true,
      imageUrl:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg", // Add your image path here
    },

    // Add more events here
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
        <main className="pt-30">
          {" "}
          {/* Adjust padding-top to match the height of your navbar */}
          <Routes>
            <Route
              path="/"
              element={
                <section className="w-full mb-4">
                  {/* Event Banner */}
                  <div className="bg-blue-700 text-white py-20 px-8 text-center">
                    <h1 className="text-6xl font-extrabold">
                      Event <span className="text-blue-300">Tickets</span>
                    </h1>
                  </div>

                  {/* Events List */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-6">
                      Available Events
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className="border-2 border-blue-300 rounded p-4 mb-4"
                        >
                          {/* Event Image */}
                          <img
                            src={event.imageUrl}
                            alt={event.name}
                            className="w-full h-32 object-cover mb-1 mt-1 rounded"
                          />
                          <h3 className="text-xl font-bold">{event.name}</h3>
                          <p>
                            <strong>Venue:</strong> {event.venue}
                          </p>
                          <p>
                            <strong>Date:</strong> {event.date}
                          </p>
                          <button
                            onClick={() => handleBuyNow(event)}
                            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
                          >
                            Buy Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              }
            />
            <Route
              path="/ticket-confirmation"
              element={<TicketConfirmation />}
            />
          </Routes>
        </main>

        {/* Purchase Form Popup */}
        {showForm && (
          <PurchaseForm event={selectedEvent} onClose={handleCloseForm} />
        )}
      </div>
    </Router>
  );
}

export default App;
