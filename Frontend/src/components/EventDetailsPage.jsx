import React, { useState } from "react";
import { ethers } from "ethers";
import { abi as TicketMasterABI } from "../scdata/TicketMaster.json"; // Import ABI
import deployedAddresses from "../scdata/deployed_addresses.json"; // Import deployed addresses
import { Link } from "react-router-dom"; // Import Link for navigation

const EventDetailsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatNumber, setSeatNumber] = useState(null);
  const [message, setMessage] = useState("");
  const [showSeatPopup, setShowSeatPopup] = useState(false);

  // Retrieve the deployed contract address from the JSON file
  const contractAddress = deployedAddresses.TicketModuleTicketMaster;

  const handleBooking = async (event) => {
    event.preventDefault();

    if (!seatNumber) {
      setMessage("Please select a seat.");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        TicketMasterABI,
        signer
      );

      const tx = await contract.bookTicket(name, email, seatNumber);
      await tx.wait();
      setMessage("Ticket booked successfully!");
    } catch (error) {
      console.error("Error booking ticket: ", error);
      setMessage("Error booking ticket. Please try again.");
    }
  };

  const toggleSeatPopup = () => setShowSeatPopup(!showSeatPopup);
  const selectSeat = (seat) => {
    setSeatNumber(seat);
    setShowSeatPopup(false);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/images/Kpop Collage.jpeg')",
      }}
    >
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Home
        </Link>
        <h1 className="text-xl font-semibold">🎟️ Concert Ticket Booking 🎶</h1>
      </nav>

      <div className="flex flex-col items-center py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Book Your Ticket
          </h2>
          <form onSubmit={handleBooking}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Seat Number:</label>
              <button
                type="button"
                onClick={toggleSeatPopup}
                className="w-full p-3 border border-gray-300 rounded mt-1 bg-blue-500 text-white hover:bg-blue-600 transition-all"
              >
                {seatNumber ? `Seat ${seatNumber}` : "Select Seat"}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded transition-all"
            >
              Book Ticket
            </button>
          </form>

          {message && (
            <p className="mt-4 text-red-500 text-center">{message}</p>
          )}

          {/* View Tickets Button */}
          <Link
            to="/ticket"
            className="mt-4 inline-block text-blue-600 underline text-center"
          >
            View Tickets
          </Link>
        </div>

        {/* Seat Selection Popup */}
        {showSeatPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-xl font-bold mb-4">Select Your Seat</h2>
              <div className="grid grid-cols-10 gap-2 mb-4">
                {[...Array(4)].map((_, row) =>
                  [...Array(10)].map((_, col) => {
                    const seat = row * 10 + col + 1;
                    return (
                      <button
                        key={seat}
                        className={`w-10 h-10 border rounded ${
                          seat === seatNumber
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 hover:bg-blue-300"
                        }`}
                        onClick={() => selectSeat(seat)}
                      >
                        {seat}
                      </button>
                    );
                  })
                )}
              </div>
              <button
                onClick={toggleSeatPopup}
                className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetailsPage;
