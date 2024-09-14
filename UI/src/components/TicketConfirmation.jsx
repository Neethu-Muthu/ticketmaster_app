import React from 'react';
import { useLocation } from 'react-router-dom';

function TicketConfirmation() {
  const location = useLocation();
  const { name, email, event } = location.state || {};

  return (
    <div className="p-8 flex justify-center items-center h-screen">
      <div className="border-2 border-blue-300 rounded p-8">
        <h2 className="text-3xl font-bold mb-4">Your Ticket</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Event:</strong> {event.name}</p>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Venue:</strong> {event.venue}</p>
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => window.print()}>Download Ticket</button>
      </div>
    </div>
  );
}

export default TicketConfirmation;
