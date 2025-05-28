import React from 'react';
import '../styles/AppointmentCard.css';

const AppointmentCard = ({ appointment }) => {
  const cardClass = appointment.type === 'primary' ? 'card primary' : 'card secondary';

  return (
    <div className={cardClass}>
      <div className="card-header">
        <span className="card-title">{appointment.title}</span>
        <span className="card-icon">{appointment.icon}</span>
      </div>
      <div className="card-time">{appointment.time}</div>
      <div className="card-doctor">{appointment.doctor}</div>
    </div>
  );
};

export default AppointmentCard;
