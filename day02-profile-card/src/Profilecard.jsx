import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, bio, image, email }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}'s avatar`} className="avatar" />
      <h2>{name}</h2>
      <p>{bio}</p>
      <a href={`mailto:${email}`} className="contact-btn">Contact</a>
    </div>
  );
};

export default ProfileCard;
