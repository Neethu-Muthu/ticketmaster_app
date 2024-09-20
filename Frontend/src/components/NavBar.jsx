// Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const NavBar = () => {
  return (
    <header className="flex justify-between items-center w-full p-4 bg-blue-900 text-white">
      <h1 className="text-2xl font-bold">TicketMaster</h1>
      <div>
        <Link to="/" className="mr-4 text-white hover:underline">
          Home
        </Link>
        <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};

export default NavBar;
