import React, { useState } from "react";
import { ethers } from "ethers";
import SeatChart from "./SeatChart";

const PurchaseForm = ({ event, onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelectSeat = (seatId) => {
    setSelectedSeats([...selectedSeats, seatId]);
  };

  const handleBuyTickets = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      // Request account access if needed
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();

      // Replace with your deployed contract address and ABI
      const contractAddress = "0xEA2766aCb7408707111549336e8199e12C5f1C0E";
      const contractABI = [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_ticketId",
              type: "uint256",
            },
          ],
          name: "buyTicket",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        // Add other relevant ABI items
      ];

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      // Ensure at least one seat is selected
      if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
      }

      // Get the ticket details to find the price
      const ticketDetails = await contract.getTicket(event.id);
      const ticketPrice = ethers.utils.formatEther(ticketDetails.price);

      // Call the smart contract method to buy tickets
      const tx = await contract.buyTicket(event.id, {
        value: ethers.utils.parseEther(ticketPrice.toString()),
      });

      await tx.wait();

      alert("Tickets purchased successfully!");
    } catch (error) {
      console.error("Error buying tickets:", error);
      alert("Failed to purchase tickets.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {event.name} - Purchase Ticket
        </h2>

        {/* Seat Chart */}
        <h3 className="text-lg font-semibold mb-2">Select Your Seats</h3>
        <SeatChart onSelectSeat={handleSelectSeat} />

        {/* Buy Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={handleBuyTickets}
        >
          Buy Tickets
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PurchaseForm;
