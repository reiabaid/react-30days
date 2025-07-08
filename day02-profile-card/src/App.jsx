import React from 'react';
import ProfileCard from './Profilecard.jsx';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
      <ProfileCard
        name="Darcy"
        bio="Frontend enthusiast. Coffee-fueled, sleep-deprived, React-addicted."
        image="https://i.pravatar.cc/150?img=32"
        email="darcy@example.com"
      />
    </div>
  );
}

export default App;
