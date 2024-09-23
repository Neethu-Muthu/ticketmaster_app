
import React, { useState, useRef } from "react";
import { ethers } from "ethers";
import { abi as TicketMasterABI } from "../scdata/TicketMaster.json"; // Import ABI
import deployedAddresses from "../scdata/deployed_addresses.json"; // Import deployed addresses
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom"; // For navigation

const TicketPage = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const [message, setMessage] = useState("");
  const ticketRef = useRef(); // Reference for the ticket to capture

  // Retrieve the deployed contract address from the JSON file
  const contractAddress = deployedAddresses.TicketModuleTicketMaster;
  const navigate = useNavigate(); // Hook for navigation

  const handleRetrieveTicket = async (event) => {
    event.preventDefault();

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        TicketMasterABI,
        signer
      );

      // Fetch the ticket details based on seat number
      const ticket = await contract.getTicket(seatNumber);
      const [name, email, isBooked] = ticket;

      setTicketData({
        name,
        email,
        isBooked: isBooked ? "Yes" : "No",
      });

      setMessage("Ticket details retrieved successfully!");
    } catch (error) {
      console.error("Error retrieving ticket: ", error);
      setMessage("Error retrieving ticket. Please try again.");
    }
  };

  // Function to download the ticket as a PDF
  const handleDownloadTicket = async () => {
    const ticketElement = ticketRef.current;
    const canvas = await html2canvas(ticketElement); // Capture the ticket as an image
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 180, 100); // Adjust the image size in the PDF
    pdf.save(`ticket_seat_${seatNumber}.pdf`); // Save the PDF with seat number
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/src/assets/images/Army Ocean Bts GIF - Army Ocean Bts - Discover & Share GIFs.gif')",
      }} // Add your image path
    >
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 bg-opacity-90">
        <div className="container mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="text-white text-lg font-semibold"
          >
            Home
          </button>
          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="text-white text-lg font-semibold"
          >
            Back
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-opacity-75">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full backdrop-blur-md bg-opacity-80">
          <h1 className="text-3xl font-bold text-center mb-6">
            Retrieve Your Ticket
          </h1>
          <form onSubmit={handleRetrieveTicket} className="mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Seat Number:
              </label>
              <input
                type="number"
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Retrieve Ticket
            </button>
          </form>

          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}

          {ticketData && (
            <div className="mt-4" ref={ticketRef}>
              <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 p-4 rounded-lg shadow-lg">
                <div className="border-b-2 border-dashed pb-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Concert Ticket
                  </h3>
                  <p className="text-sm text-gray-700">
                    Seat Number: <strong>{seatNumber}</strong>
                  </p>
                </div>

                <div className="border-b-2 border-dashed pb-4 mb-4">
                  <p className="text-sm text-gray-700">
                    Name: <strong>{ticketData.name}</strong>
                  </p>
                  <p className="text-sm text-gray-700">
                    Email: <strong>{ticketData.email}</strong>
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">Is Booked:</p>
                  <p
                    className={`text-sm font-bold ${
                      ticketData.isBooked === "Yes"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {ticketData.isBooked}
                  </p>
                </div>
              </div>
            </div>
          )}

          {ticketData && (
            <div className="mt-6 text-center">
              <button
                onClick={handleDownloadTicket}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
              >
                Download Ticket
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
