import React from 'react';
import '../styles/UpcomingSchedule.css';
import { upcomingScheduleData } from '../data/upcomingScheduleData';

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <p className="section-title">The Upcoming Schedule</p>
      {upcomingScheduleData.map((item, index) => (
        <div key={index} className="day-section">
          <p className="day-label">On {item.day}</p>
          <div className="appointments-row">
            {item.appointments.map((appt, idx) => {
              return (
              <div key={idx} className={`appointment-card ${appt.className} `}>
                <div className="card-header">
                  <span className="card-title">{appt.title}</span>
                  <span className="card-icon">{appt.icon}</span>
                </div>
                <div className="card-time">{appt.time}</div>
              </div>
            )})}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
