import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const events = [
    {
      id: 1,
      name: "Rock Concert",
      date: "09/30/2024",
      location: "Stadium A",
      image:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg",
    },
    {
      id: 2,
      name: "Jazz Night",
      date: "10/05/2024",
      location: "Jazz Club",
      image:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg",
    },
    {
      id: 3,
      name: "Jazz Night",
      date: "10/05/2024",
      location: "Jazz Club",
      image:
        "/src/assets/images/970082db-8334-42e0-aa4a-2241ae05f98c_RETINA_PORTRAIT_3_2.jpg",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/src/assets/images/_ (16).jpeg')`,
      }}
    >
      <header className="flex justify-between items-center w-full p-24 bg-blue-900 text-white bg-opacity-75">
        <h1 className="text-2xl font-bold">TicketMaster</h1>
{/*         <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
          Connect Wallet
        </button> */}
      </header>

      <section className="text-center my-10 bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold">Welcome to TicketMaster!</h2>
        <p className="mt-4 text-lg">
          Purchase NFT tickets for your favorite events
        </p>
      </section>

      <section className="w-full max-w-6xl my-10">
        <h3 className="text-2xl font-bold text-center text-white">
          Unlock Memorable Experiences!
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-100 rounded-lg shadow overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-xl text-gray-800">
                  {event.name}
                </h4>
                <p className="text-gray-600">Date: {event.date}</p>
                <p className="text-gray-600">Location: {event.location}</p>
                <Link to={`/event/${event.id}`}>
                  <button className="mt-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="w-full p-4 bg-gray-200 text-center">
        <p>Contact us: info@example.com</p>
        <p>&copy; 2024 TicketMaster. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
