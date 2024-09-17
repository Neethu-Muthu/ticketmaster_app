import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Contract, ethers } from 'ethers';
import { TicketModuleTicketMaster } from '../scdata/deploy_addresses.json'; // Update path as necessary
import { abi } from '../scdata/Ticket.json'; // Update path as necessary

function PurchaseForm({ event, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install MetaMask to use this feature.");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new Contract(TicketModuleTicketMaster, abi, signer);

      // Ensure MetaMask is connected
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        await provider.send("eth_requestAccounts", []);
      }

      // Call smart contract method to purchase ticket
      const tx = await contract.buyTicket(event.id, {
        value: ethers.utils.parseEther("0.1") // Adjust value as needed
      });
      await tx.wait(); // Wait for transaction to be mined

      console.log('Transaction Hash:', tx.hash);

      // Navigate to the confirmation page with the purchased ticket details
      navigate('/ticket-confirmation', { state: { ...formData, event } });
    } catch (error) {
      console.error('Error purchasing ticket:', error.message);
      alert(`Error purchasing ticket: ${error.message}`);
    } finally {
      setProcessing(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <form className="bg-white p-8 rounded" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Purchase Ticket</h2>
          <label className="block mb-2">
            Name:
            <input type="text" name="name" onChange={handleChange} className="border p-2 w-full" required />
          </label>
          <label className="block mb-4">
            Email:
            <input type="email" name="email" onChange={handleChange} className="border p-2 w-full" required />
          </label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={processing}>
            {processing ? 'Processing...' : 'Confirm Purchase'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PurchaseForm;
