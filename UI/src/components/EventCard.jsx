import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { contractAddress, abi } from "./contractDetails";
import eventImage from "../assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg";
import SeatSelection from "./SeatSelection";

const EventCard = ({ event, onPurchase }) => {
  const navigate = useNavigate();
  const [showSeats, setShowSeats] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);

  const handlePurchase = async () => {
    try {
      // Connect to MetaMask
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Initiate transaction for the selected seat
      const tx = await contract.buyTicket(event.id, selectedSeat);
      await tx.wait(); // Wait for transaction to be mined

      // Call onPurchase if provided
      if (onPurchase) onPurchase(event);

      // Navigate to confirmation page
      navigate("/ticket-confirmation", {
        state: {
          event,
          name: "User Name",
          email: "user@example.com",
          seat: selectedSeat,
        },
      });
    } catch (error) {
      console.error("Error purchasing ticket:", error);
      alert("Transaction failed!");
    }
  };

  const handleSelectSeat = (seatIndex) => {
    setSelectedSeat(seatIndex);
  };

  return (
    <div className="mb-6 transform transition-transform duration-300 hover:scale-105">
      <img
        src={eventImage}
        alt={event.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            {event.name}
          </h2>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Date:</span> {event.date}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Time:</span> {event.time}
          </p>
          <p className="text-gray-600 mb-1">
            <span className="font-medium">Venue:</span> {event.venue}
          </p>
          <button
            className="w-full py-2 mt-4 rounded bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => setShowSeats(true)}
          >
            Select Seat
          </button>
          {showSeats && (
            <div className="mt-4">
              <SeatSelection
                seats={event.seats}
                onSelectSeat={handleSelectSeat}
              />
              <button
                className="w-full py-2 mt-4 rounded bg-green-500 text-white hover:bg-green-600"
                onClick={handlePurchase}
                disabled={selectedSeat === null}
              >
                Confirm Purchase
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
