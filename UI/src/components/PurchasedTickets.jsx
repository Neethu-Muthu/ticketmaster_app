import React, { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";
import { TicketModuleTicketMaster } from "../scdata/deployed_addresses.json";
import { abi } from "../scdata/Ticket.json";

function PurchasedTickets() {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");

  const provider = new BrowserProvider(window.ethereum);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const signer = await provider.getSigner();
        const contract = new Contract(TicketModuleTicketMaster, abi, signer);

        // Replace 'userAddress' with the actual address of the user
        const userAddress = await signer.getAddress();
        const result = await contract.getPurchasedTickets(userAddress);

        setTickets(result);
      } catch (err) {
        console.error("Error fetching tickets:", err);
        setError(err.message);
      }
    }

    fetchTickets();
  }, [provider]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Tickets</h2>
      {error && <p className="text-red-500">{error}</p>}
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        tickets.map((ticket, index) => (
          <div
            key={index}
            className="border-2 border-blue-300 rounded p-4 mb-4"
          >
            <h3 className="text-xl font-bold">{ticket.event.name}</h3>
            <p>
              <strong>Venue:</strong> {ticket.event.venue}
            </p>
            <p>
              <strong>Date:</strong> {ticket.event.date}
            </p>
            <p>
              <strong>Purchased By:</strong> {ticket.name}
            </p>
            <p>
              <strong>Purchased On:</strong>{" "}
              {new Date(ticket.purchaseDate * 1000).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default PurchasedTickets;
