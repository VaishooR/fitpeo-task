import React from 'react';
import '../styles/CalendarSchedule.css';
import { calendarScheduleData } from '../data/calendarScheduleData';

const CalendarSchedule = () => {
  return (
    <div className="schedule-container">
      {calendarScheduleData.map((day) => (
        <div className={`day-column ${day.isToday ? 'today' : ''}`} key={day.day}>
          <div className={`day-header ${day.disableAll ? 'disableAll' : ''}`}>
            <div className="day-name">{day.day}</div>
            <div className="day-date">{day.date}</div>
          </div>
          <div className="slots">
            {day.slots.map((slot, index) => (
              <div
                key={index}
                className={`slot ${slot.active ? 'active' : ''} ${slot.disabled ? 'disabled' : ''}`}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarSchedule;
