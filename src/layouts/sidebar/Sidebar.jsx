import React from 'react';
import '../../styles/Sidebar.css'
import sidebarData from '../../data/sidebarData';
import { Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="logo">
          <span>Health</span><span>care.</span>
        </div>

        {sidebarData.map((section, idx) => (
          <div key={idx} className={`section ${section.extraStyle || ''}`}>
            <p className="section_title">{section.title}</p>
            {section.items.map((item, index) => {
              const Icon = item.icon;
              const isDashboard = item.label === "Dashboard";
              return (
                <div key={index} className={`menu-item ${item.label === "Dashboard" ? 'active' : ''}`}>
                  <Icon size={14} strokeWidth={1.5} color={isDashboard ? "black" : "#666"} fill="rgb(235, 234, 234)" className='icon-style'/>
                  <span style={{ color: isDashboard ? "black" : "inherit" }}>{item.label}</span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;









// <style>
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
// </style>

// const Sidebar = () => {
//   return (
//     <div style={{display:"flex",justifyContent:"center",width:"15%", backgroundColor:"#F6FAFF", margin:"10px 0px 10px 10px", borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px" }}>
//       <div style={{display:"flex",width:"60%",flexDirection:"column",fontFamily: "Poppins, sans-serif"}}>
//           <div style={{fontSize:"20px",fontWeight:"600",marginTop:"50px"}}><span style={{color:"#66DDEA"}}>Health</span><span>care.</span></div>

//           <div style={{marginTop:"30px",fontSize:"12px", color:"grey"}}>
//             <p style={{color:"grey",fontSize:"11px",marginBottom:"15px"}}>General</p>
//             <div style={{margin:"10px 0px"}} ><span style={{margin:"0px 10px 0px 0px"}}>🈹 </span><span>Dashboard</span></div>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>🧮 </span><span>History</span></div>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>📅 </span><span>Calendar</span></div>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>🔖 </span><span>Appointments</span></div>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>🉑 </span><span>Statistics</span></div>
//           </div>

//           <div style={{marginTop:"30px",fontSize:"12px", color:"grey"}}>
//             <p style={{color:"grey",fontSize:"11px",marginBottom:"15px"}}>Tools</p>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>📈 </span><span>Chat</span></div>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>📱 </span><span>Support</span></div>
//           </div>

//           <div style={{marginTop:"150px",fontSize:"12px", color:"grey"}}>
//             <div style={{margin:"10px 0px"}}><span style={{margin:"0px 10px 0px 0px"}}>🔒  </span><span>Settings</span></div>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar

