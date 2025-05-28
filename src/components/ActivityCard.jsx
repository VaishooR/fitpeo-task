import React from 'react';
import '../styles/ActivityCard.css';
import activity from '../assets/activity.png'; 

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <p>Activity</p>
        <p className="appointment-info">3 appointments on this week</p>
      </div>
      <div className="activity-image-wrapper">
        <img src={activity} alt="Activity" className="activity-image" />
      </div>
    </div>
  );
};

export default ActivityCard;
