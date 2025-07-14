import React, { useState } from 'react';

function MainPanel({ day, addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (!amount || isNaN(amount)) return;
    addTransaction(amount, description);
    setAmount('');
    setDescription('');
  };

  const total = day.transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="main-panel">
      <h1>{day.name} - Expense Tracker</h1>
      <h2>Total: ₹{total.toFixed(2)}</h2>
      <div className="transaction-form">
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="transactions-list">
        {day.transactions.map((t, index) => (
          <div key={index} className="transaction">
            ₹{t.amount.toFixed(2)} - {t.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPanel;
