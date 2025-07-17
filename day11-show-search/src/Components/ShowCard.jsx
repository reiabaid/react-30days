import React from 'react';
import './ShowCard.css';

function ShowCard({ show }) {
  return (
    <div className="show-card">
      <img
        src={show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}
        alt={show.name}
      />
      <h2>{show.name}</h2>
      <p>{show.summary ? show.summary.replace(/<[^>]*>/g, '').slice(0, 100) + '...' : 'No description available.'}</p>
      <button className="more-btn">Show More</button>
    </div>
  );
}

export default ShowCard;
