import React from "react";

const SeatSelection = ({ seats, onSelectSeat }) => {
  return (
    <div className="grid grid-cols-5 gap-2">
      {seats.map((seat, index) => (
        <button
          key={index}
          className={`w-12 h-12 rounded ${
            seat.isAvailable ? "bg-green-500" : "bg-red-500"
          } text-white`}
          disabled={!seat.isAvailable}
          onClick={() => onSelectSeat(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SeatSelection;
