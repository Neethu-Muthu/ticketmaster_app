import React from 'react';

function PurchasedTickets({ tickets }) {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Tickets</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="border-2 border-blue-300 rounded p-4 mb-4">
          <h3 className="text-xl font-bold">{ticket.event.name}</h3>
          <p><strong>Venue:</strong> {ticket.event.venue}</p>
          <p><strong>Date:</strong> {ticket.event.date}</p>
          <p><strong>Purchased By:</strong> {ticket.name}</p>
          <p><strong>Purchased On:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default PurchasedTickets;
