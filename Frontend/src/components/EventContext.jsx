import React, { createContext, useContext, useState } from "react";

// Create the EventContext
const EventContext = createContext();

// Provider component
export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

// Custom hook to use the EventContext
export const useEvents = () => {
  return useContext(EventContext);
};
