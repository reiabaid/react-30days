import React, { useState } from 'react';
import './QuoteBox.css';

const quotes = [
  { text: "I'm not superstitious, but I am a little stitious.", author: "Michael Scott, The Office" },
  { text: "Friends don't lie.", author: "El" },
  { text: "I'm in a glass case of emotion!", author: "Anchorman" },
  { text: "Life moves pretty fast. If you don't stop and look around once in a while, you could miss it.", author: "Ferris Bueller" },
  { text: "Why is the rum gone?", author: "Jack Sparrow" },
  { text: "I am serious. And don't call me Shirley.", author: "Airplane!" },
  { text: "Fat guy in a little coat!", author: "Tommy Boy" },
  { text: "Just keep swimming.", author: "Dory" },
  { text: "60% of the time, it works every time.", author: "Anchorman" },
  { text: "I feel the need — the need for speed!", author: "Top Gun" }
];

function QuoteBox() {
  const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="quote-box">
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">— {quote.author}</p>
      <button className="pixel-btn" onClick={handleNewQuote}>NEW QUOTE</button>
    </div>
  );
}

export default QuoteBox;
