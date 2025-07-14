import React from 'react';

function DaysPanel({ days, currentDayIndex, setCurrentDayIndex, addDay }) {
  return (
    <div className="days-panel">
      {days.map((day, index) => (
        <div
          key={index}
          className={`day-item ${index === currentDayIndex ? 'selected' : ''}`}
          onClick={() => setCurrentDayIndex(index)}
        >
          {day.name}
        </div>
      ))}
      <button onClick={addDay}>+ New Day</button>
    </div>
  );
}

export default DaysPanel;
