import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  // Hardcoded admin wallet address
  const adminWalletAddress = "0x1234567890abcdef1234567890abcdef12345678"; // Replace with the actual admin address

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For now, we'll just check the wallet address
    if (email && password && walletAddress) {
      if (walletAddress.toLowerCase() === adminWalletAddress.toLowerCase()) {
        // Redirect to admin dashboard
        navigate("/admin"); // Replace with actual admin route
      } else {
        // Redirect to user dashboard or home
        navigate("/"); // Redirect to home page for regular users
      }
    } else {
      alert("Please enter your email, password, and wallet address.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
