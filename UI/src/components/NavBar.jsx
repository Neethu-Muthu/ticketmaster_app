import React, { useState } from "react";
import { BrowserProvider } from "ethers"; // Import BrowserProvider from ethers
import { Link } from "react-router-dom";

const Navbar = () => {
  const [account, setAccount] = useState(null); // State to store account address

  // Function to connect MetaMask
  const connectMetaMask = async () => {
    try {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address); // Store account address in state
        alert(`Successfully Connected: ${address}`);
      } else {
        alert('MetaMask is not installed!');
      }
    } catch (error) {
      console.error('MetaMask connection error:', error);
    }
  };

  return (
    <header className="bg-blue-700 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold text-white">
          ticketmaster<span className="text-sm">®</span>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          {account ? (
            <span className="text-white">{account}</span>
          ) : (
            <button onClick={connectMetaMask} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Connect
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
