import React from "react";
import { useLocation } from "react-router-dom";

const TicketConfirmation = () => {
  const location = useLocation();
  const { event, name, email, seat } = location.state || {};

  return (
    <div className="container mx-auto mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Ticket Confirmation</h1>
        <p className="mb-2">
          <span className="font-medium">Event:</span> {event?.name}
        </p>
        <p className="mb-2">
          <span className="font-medium">Date:</span> {event?.date}
        </p>
        <p className="mb-2">
          <span className="font-medium">Time:</span> {event?.time}
        </p>
        <p className="mb-2">
          <span className="font-medium">Venue:</span> {event?.venue}
        </p>
        <p className="mb-2">
          <span className="font-medium">Name:</span> {name}
        </p>
        <p className="mb-2">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="mb-2">
          <span className="font-medium">Seat:</span>{" "}
          {seat !== null ? seat + 1 : "N/A"}
        </p>
      </div>
    </div>
  );
};

export default TicketConfirmation;
