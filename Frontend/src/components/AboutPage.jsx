import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import concertGif from "/src/assets/images/Guitarist.gif"; // Update with the correct path
import metamaskIcon from "/src/assets/images/1683020955metamask-icon-png.webp"; // Update with the correct path to MetaMask icon

const AboutPage = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage: `url(${concertGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="p-4 bg-blue-900 text-white">
        <h1 className="text-3xl font-bold">TicketMaster</h1>
        {/* <Link to="/" className="text-white hover:underline">
          Home
        </Link> */}
      </header>

      <main className="flex-grow flex flex-col items-center justify-center">
        <div className="relative z-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="mt-4">
            We are TicketMaster, your go-to platform for unforgettable concert
            experiences! Our mission is to connect music lovers with their
            favorite artists and provide access to the best live events.
          </p>

          <h3 className="mt-6 text-lg font-semibold">Connect Your Wallet</h3>
          <p className="mt-2 flex items-center justify-center">
            <img src={metamaskIcon} alt="MetaMask" className="w-8 h-8 mr-2" />
            To enhance your experience, please connect your MetaMask wallet to
            purchase NFT tickets.
          </p>
          <Link to="/home">
            <button className="mt-6 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Explore Events
            </button>
          </Link>
        </div>
      </main>

      <footer className="w-full p-4 bg-gray-200 text-center">
        <p>Contact us: info@example.com</p>
        <p>&copy; 2024 TicketMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
