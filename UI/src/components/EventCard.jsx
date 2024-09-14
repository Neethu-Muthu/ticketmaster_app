import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { contractAddress, abi } from './contractDetails'; // Ensure to replace this with your actual path

const EventCard = ({ event, onPurchase }) => {
  const navigate = useNavigate();

  const handlePurchase = async () => {
    try {
      // Connect to MetaMask
      if (!window.ethereum) {
        alert('MetaMask is not installed!');
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Initiate transaction
      const tx = await contract.buyTicket(event.id);
      await tx.wait(); // Wait for transaction to be mined

      // Call onPurchase if provided
      if (onPurchase) onPurchase(event);

      // Navigate to confirmation page
      navigate('/ticket-confirmation', { state: { event, name: 'User Name', email: 'user@example.com' } });
    } catch (error) {
      console.error('Error purchasing ticket:', error);
      alert('Transaction failed!');
    }
  };

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
          onClick={handlePurchase}
        >
          {event.availableTickets > 0 ? 'Buy Now' : 'Sold Out'}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
