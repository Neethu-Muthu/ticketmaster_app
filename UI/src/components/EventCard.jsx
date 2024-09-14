// src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 transform transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{event.name}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Date:</span> {event.date}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Time:</span> {event.time}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Venue:</span> {event.venue}
        </p>
        <p className={`mb-4 ${event.availableTickets > 0 ? 'text-green-600' : 'text-red-600'}`}>
          <span className="font-medium">Tickets Available:</span> {event.availableTickets > 0 ? event.availableTickets : 'Sold Out'}
        </p>
        <button 
          className={`w-full py-2 rounded ${event.availableTickets > 0 ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
          disabled={event.availableTickets <= 0}
        >
          {event.availableTickets > 0 ? 'Buy Now' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
