import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 0) setCount(prev => prev - 1);
  };
  const reset = () => setCount(0);

  return (
    <div className="pixel-box">
      <h1>🕹️ COUNT: {count}</h1>
      <div className="button-group">
        <button onClick={decrement} disabled={count === 0}>–</button>
        <button onClick={reset}>RESET</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default Counter;
