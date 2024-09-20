import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventCreationPage = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    imageUrl: "",
    date: "",
    location: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    // For now, we'll just log it and show a success message
    console.log("Event Created:", eventDetails);
    setMessage("Event created successfully!");

    // Optionally redirect to a different page
    navigate("/"); // Redirect to home after creation
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="p-4 bg-blue-900 text-white w-full text-center">
        <h1 className="text-3xl font-bold">Create New Event</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mt-10 p-6 bg-white rounded-lg shadow-md w-full max-w-md"
      >
        <div>
          <label className="block text-sm font-medium">Event Title</label>
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={eventDetails.imageUrl}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Event
        </button>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>
    </div>
  );
};

export default EventCreationPage;
