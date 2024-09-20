// import React, { useEffect, useState, useRef } from "react";
// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { ethers } from "ethers";
// import { abi as TicketMasterABI } from "../scdata/TicketMaster.json"; // Import ABI
// import deployedAddresses from "../scdata/deployed_addresses.json"; // Import deployed addresses
// import { v4 as uuidv4 } from "uuid";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const TicketPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate(); // Initialize navigate function
//   const [ticketId, setTicketId] = useState("");
//   const [ticketDetails, setTicketDetails] = useState(null); // Store ticket details
//   const ticketRef = useRef(null);

//   const contractAddress = deployedAddresses.TicketModuleTicketMaster;

//   useEffect(() => {
//     const uniqueId = uuidv4();
//     setTicketId(uniqueId);

//     // Fetch the ticket details on page load
//     fetchTicketDetails();
//   }, []);

//   // Function to fetch ticket details from the blockchain
//   const fetchTicketDetails = async () => {
//     try {
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner(); // Get the connected user
//       const contract = new ethers.Contract(contractAddress, TicketMasterABI, signer);

//       // Assuming the smart contract has a method like `getTicketDetails(address)`
//       const ticketData = await contract.getTicketDetails(signer.getAddress());

//       // Set the fetched ticket details
//       setTicketDetails({
//         title: ticketData[0],
//         date: ticketData[1],
//         location: ticketData[2],
//         seatNumber: ticketData[3],
//       });
//     } catch (error) {
//       console.error("Error fetching ticket details:", error);
//     }
//   };

//   // Function to download the ticket as a PDF
//   const downloadTicketAsPDF = () => {
//     const input = ticketRef.current;
//     html2canvas(input, { useCORS: true, allowTaint: true }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("landscape");
//       pdf.addImage(imgData, "PNG", 10, 10, 280, 150);
//       pdf.save(`ticket-${ticketId}.pdf`);
//     });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <header className="flex justify-between items-center w-full p-28 bg-blue-900 text-white shadow-lg m-0 h-48">
//         <h1 className="text-3xl font-bold">TicketMaster</h1>
//         <Link to="/home" className="text-white hover:underline">
//           Home
//         </Link>
//       </header>

//       {/* Ticket Design */}
//       <section
//         ref={ticketRef}
//         className="w-full max-w-4xl my-10 p-6 bg-white rounded-lg shadow-md"
//       >
//         <div className="relative flex flex-col md:flex-row items-center justify-center w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
//           {/* Left side: Concert Image */}
//           <div className="w-full md:w-1/3">
//             <img
//               src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
//               alt="Concert"
//               className="w-full h-full object-cover rounded-l-lg"
//               crossOrigin="anonymous"
//             />
//           </div>

//           {/* Right side: Ticket Details */}
//           <div className="w-full md:w-2/3 p-8">
//             <h2 className="text-4xl font-bold mb-2">
//               {ticketDetails?.title || "Event Title"}
//             </h2>
//             <p className="text-lg mb-1">
//               <strong>Date:</strong> {ticketDetails?.date || "Event Date"}
//             </p>
//             <p className="text-lg mb-4">
//               <strong>Location:</strong>{" "}
//               {ticketDetails?.location || "Event Location"}
//             </p>

//             <div className="w-full bg-white text-black rounded-lg p-6 shadow-lg">
//               <div className="mb-4">
//                 <h3 className="text-2xl font-bold">Ticket Information</h3>
//               </div>
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <p>
//                     <strong>Name:</strong> {userDetails?.name}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {userDetails?.email}
//                   </p>
//                 </div>
//                 <div className="text-right">
//                   <p className="font-bold">Seats:</p>
//                   <p>{ticketDetails?.seatNumber || "N/A"}</p>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center">
//                 <p className="font-bold">Ticket ID:</p>
//                 <p>{ticketId || "Generating..."}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <button
//         onClick={downloadTicketAsPDF}
//         className="mt-6 bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
//       >
//         Download Ticket
//       </button>

//       <button
//         className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-400 transition"
//         onClick={() => navigate(-1)} // Navigate back
//       >
//         Back
//       </button>

//       <footer className="w-full p-4 bg-gray-200 text-center">
//         <p>Contact us: info@example.com</p>
//         <p>&copy; 2024 TicketMaster. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default TicketPage;
import React, { useState } from "react";
import { ethers } from "ethers";
import { abi as TicketMasterABI } from "../scdata/TicketMaster.json"; // Import ABI
import deployedAddresses from "../scdata/deployed_addresses.json"; // Import deployed addresses

const TicketPage = () => {
  const [seatNumber, setSeatNumber] = useState("");
  const [ticketData, setTicketData] = useState(null);
  const [message, setMessage] = useState("");

  // Retrieve the deployed contract address from the JSON file
  const contractAddress = deployedAddresses.TicketModuleTicketMaster;

  const handleRetrieveTicket = async (event) => {
    event.preventDefault();

    try {
      // Connect to the user's wallet using ethers.js
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(
        contractAddress,
        TicketMasterABI,
        signer
      );

      // Fetch the ticket details based on seat number
      const ticket = await contract.getTicket(seatNumber);

      // Parse the ticket details
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

  return (
    <div>
      <h1>Retrieve Ticket Information</h1>
      <form onSubmit={handleRetrieveTicket}>
        <div>
          <label>Seat Number:</label>
          <input
            type="number"
            value={seatNumber}
            onChange={(e) => setSeatNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Retrieve Ticket</button>
      </form>

      {message && <p>{message}</p>}

      {ticketData && (
        <div>
          <h3>Ticket Details</h3>
          <p>Name: {ticketData.name}</p>
          <p>Email: {ticketData.email}</p>
          <p>Is Booked: {ticketData.isBooked}</p>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
