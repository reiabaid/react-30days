import React, { useState } from 'react';
import './App.css';
import ShowCard from './Components/ShowCard.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [shows, setShows] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
      const data = await res.json();
      setShows(data.map(item => item.show));
    } catch (err) {
      console.error('Error fetching shows:', err);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>TV Show Search</h1>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a show..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      <div className="show-grid">
        {shows.map((show, index) => (
          <ShowCard key={index} show={show} />
        ))}
      </div>
    </div>
  );
}

export default App;
