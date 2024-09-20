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
