import React, { useState } from 'react';
import DaysPanel from './components/DaysPanel';
import MainPanel from './components/MainPanel';
import './App.css';

function App() {
  const [days, setDays] = useState([{ name: 'Day 1', transactions: [] }]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const addDay = () => {
    setDays([...days, { name: `Day ${days.length + 1}`, transactions: [] }]);
    setCurrentDayIndex(days.length);
  };

  const addTransaction = (amount, description) => {
    const updatedDays = [...days];
    updatedDays[currentDayIndex].transactions.push({ amount: parseFloat(amount), description });
    setDays(updatedDays);
  };

  return (
    <div className="app-container">
      <DaysPanel days={days} currentDayIndex={currentDayIndex} setCurrentDayIndex={setCurrentDayIndex} addDay={addDay} />
      <MainPanel day={days[currentDayIndex]} addTransaction={addTransaction} />
    </div>
  );
}

export default App;
