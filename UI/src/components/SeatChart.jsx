// src/components/SeatChart.jsx

import React, { useState } from "react";

const SeatChart = ({ rows = 5, cols = 10, onSelectSeat }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Initialize the seat layout
  const seats = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill("available"));

  const handleSeatClick = (row, col) => {
    const seatId = `${row}-${col}`;

    if (selectedSeats.includes(seatId)) {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatId]);
    }

    onSelectSeat(seatId);
  };

  return (
    <div className="seat-chart">
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="seat-row">
          {row.map((seat, colIndex) => {
            const seatId = `${rowIndex}-${colIndex}`;
            const isSelected = selectedSeats.includes(seatId);
            const seatClass = isSelected ? "bg-green-500" : "bg-gray-300";

            return (
              <button
                key={colIndex}
                className={`seat w-8 h-8 m-1 ${seatClass}`}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
              >
                {colIndex + 1}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatChart;
