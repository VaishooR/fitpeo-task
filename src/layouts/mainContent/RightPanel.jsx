import React from 'react';
import CalendarSchedule from '../../components/CalendarSchedule';
import { appointmentData } from '../../data/appointmentData';
import AppointmentCard from '../../components/AppointmentCard';
import UpcomingSchedule from '../../components/UpcomingSchedule';
import RightPanelButtons from '../../components/RightPanelButtons';
import '../../styles/RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel-container">
      {/* Buttons */}
      <div className="right-panel-button-wrapper">
        <RightPanelButtons />
      </div>

      {/* Date */}
      <div className="right-panel-date">
        <p>October 2021</p>
        <div>&#129044; &#129046;</div>
      </div>

      {/* Calendar Schedule */}
      <div className="right-panel-calendar">
        <CalendarSchedule />
      </div>

      {/* Appointment */}
      <div className="right-panel-appointments">
        {appointmentData.map((appt, index) => (
          <AppointmentCard key={index} appointment={appt} />
        ))}
      </div>

      {/* Upcoming Schedule */}
      <UpcomingSchedule />
    </div>
  );
};

export default RightPanel;














// import React from 'react'
// import CalendarSchedule from '../../components/calendarSchedule/CalendarSchedule'
// import { appointmentData } from '../../components/appointmentCard/appointmentData'
// import AppointmentCard from '../../components/appointmentCard/AppointmentCard'
// import UpcomingSchedule from '../../components/upcomingSchedule/UpcomingSchedule'
// import RightPanelButtons from '../../components/rightPanelButtons/RightPanelButtons'

// const RightPanel = () => {
//   return (
//     <div style={{ display: 'flex',width:"50%", backgroundColor:"#F6FAFF", borderTopRightRadius:"20px", borderBottomRightRadius:"20px", alignItems:"center", flexDirection:"column", fontFamily:"Poppins, sans-serif" }}>
//         {/* Buttons */}
//         <div style={{marginTop:"45px",width:"85%", display:"flex", justifyContent:"flex-end",alignItems:"center",height:"45px",gap:"10px" }}>
//           <RightPanelButtons/>
//         </div>
        
//         {/* Date */}
//         <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"90%",marginTop:"5px"}}>
//           <p style={{fontSize:"12px",color:"navy"}}>October 2021</p>
//           <div style={{fontSize:"24px",color:"navy"}}>&#129044; &#129046;</div>
//         </div>

//         {/* Calendar Schedule */}
//         <div style={{width:"100%",height:"140px",marginTop:"0px",display:"flex",justifyContent:"center"}}>
//           <CalendarSchedule/>
//         </div>

//         {/* Appointment */}
//         <div style={{display:"flex",width:"90%",marginTop:"15px",justifyContent:"space-between",gap:"10px",alignItems:"center"}}>
//           {appointmentData.map((appt, index) => (
//             <AppointmentCard key={index} appointment={appt} />
//           ))}
//         </div>

//         {/* Upcoming Schedule */}
//         <UpcomingSchedule />
//     </div>
//   )
// }

// export default RightPanel