// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const EventListPage = () => {
//   const events = [
//     {
//       id: 1,
//       name: "Rock Concert",
//       date: "09/30/2024",
//       location: "Stadium A",
//       image: "/src/assets/images/event.jpg", // Update the path as needed
//       cost: "0.05 ETH",
//       ticketsAvailable: 100,
//     },
//     // Add more events as needed
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
//       <header className="flex justify-between items-center w-full p-6 bg-blue-800 text-white shadow-lg">
//         <h1 className="text-2xl font-bold">TicketMaster</h1>
//         <Link to="/" className="mr-4 text-white hover:underline">
//           Home
//         </Link>
//       </header>

//       <section className="w-full max-w-6xl my-10">
//         <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
//           Exciting Events Await!
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden"
//             >
//               <img
//                 src={event.image}
//                 alt={event.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold text-xl text-gray-800">
//                   {event.name}
//                 </h4>
//                 <p className="text-gray-600">{event.date}</p>
//                 <p className="text-gray-600">{event.location}</p>
//                 <p className="text-gray-800 font-semibold">{event.cost}</p>
//                 <p className="text-green-600">
//                   Available Tickets: {event.ticketsAvailable}
//                 </p>
//                 <Link to={`/event/${event.id}`}>
//                   <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <footer className="w-full p-4 bg-gray-200 text-center">
//         <p>Contact us: info@example.com</p>
//         <p>&copy; 2024 TicketMaster. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default EventListPage;
