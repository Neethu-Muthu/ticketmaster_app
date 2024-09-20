import React, { useState } from "react";
import { ethers } from "ethers";
import { abi as TicketMasterABI } from "../scdata/TicketMaster.json"; // Import ABI
import deployedAddresses from "../scdata/deployed_addresses.json"; // Import deployed addresses

const EventDetailsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [message, setMessage] = useState("");

  // Retrieve the deployed contract address from the JSON file
  const contractAddress = deployedAddresses.TicketModuleTicketMaster; // Make sure this key exists in your JSON file

  const handleBooking = async (event) => {
    event.preventDefault();

    try {
      // Prompt the user to connect their wallet using the BrowserProvider
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner(); // Get the signer (user) from the provider

      const contract = new ethers.Contract(
        contractAddress,
        TicketMasterABI,
        signer
      );

      const tx = await contract.bookTicket(name, email, seatNumber);

      // Wait for the transaction to be mined
      await tx.wait();
      setMessage("Ticket booked successfully!");
    } catch (error) {
      console.error("Error booking ticket: ", error);
      setMessage("Error booking ticket. Please try again.");
    }
  };

  return (
    <>
      <div>
        <h1>Event Ticket Booking</h1>
        <form onSubmit={handleBooking}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Seat Number:</label>
            <input
              type="number"
              value={seatNumber}
              onChange={(e) => setSeatNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Book Ticket</button>
        </form>

        {message && <p>{message}</p>}
      </div>
      <a href="/ticket" className="text-black">View</a>
    </>
  );
};

export default EventDetailsPage;
