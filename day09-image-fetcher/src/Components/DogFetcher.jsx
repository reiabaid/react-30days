import React, { useState, useEffect } from 'react';
import './DogFetcher.css';

function DogFetcher() {
  const [dogImage, setDogImage] = useState('');

  const fetchDogImage = async () => {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setDogImage(data.message);
    } catch (error) {
      console.error('Failed to fetch dog image:', error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="dog-container">
      <h1>Random Dog Image</h1>
      {dogImage && <img src={dogImage} alt="A cute dog" />}
      <button onClick={fetchDogImage}>Fetch New Dog</button>
    </div>
  );
}

export default DogFetcher;
