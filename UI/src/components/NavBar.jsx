import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-700 py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          ticketmaster<span className="text-sm">®</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
