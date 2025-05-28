import React from 'react';
import '../styles/HealthCard.css';

const HealthCard = ({ icon, label, date, progressClass }) => {
  return (
    <div className="health-card">
      <div className='health-parts'><span>{icon}</span><span>{label}</span> </div>
      <p className="card-date">Date: {date}</p>
      <progress className={progressClass} value="75" max="100"></progress>
    </div>
  );
};

export default HealthCard;
