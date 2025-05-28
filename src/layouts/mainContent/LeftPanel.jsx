import React from 'react';
import '../../styles/LeftPanel.css';
import SearchInput from '../../components/SearchInput';
import { ArrowRight, ChevronDown } from 'lucide-react';
import HealthCard from '../../components/HealthCard';
import HumanImage from '../../components/HumanImage';
import ActivityCard from '../../components/ActivityCard';
import { healthData } from '../../data/healthData';

const LeftPanel = () => {
  return (
    <div className="left-panel-container">
      {/* Search */}
      <div className="left-panel-search"><SearchInput /></div>

      {/* Dashboard */}
      <div className="left-panel-dashboard">
        <div className="dashboard-title">Dashboard</div>
        <p className="dashboard-week">This Week <ChevronDown size={12} /></p>
      </div>

      {/* Human Body */}
      <div className="left-panel-body">
        <div><HumanImage /></div>
        <div className="health-cards">
          {healthData.map((item, index) => (
            <HealthCard
              key={index}
              icon={item.icon}
              label={item.label}
              date={item.date}
              progressClass={item.progressClass}
            />
         ))}
          <p className="details-link">
            <span>Details</span><ArrowRight size={10} />
          </p>
        </div>
      </div>

      {/* Activity */}
      <div className="activity-wrapper"><ActivityCard /></div>
    </div>
  );
};

export default LeftPanel;

















// import React from 'react'
// import './LeftPanel.css'
// import SearchInput from '../../components/searchInput/SearchInput'
// import { ArrowRight, ChevronDown } from 'lucide-react'
// import HealthCard from '../../components/healthCard/HealthCard'
// import HumanImage from '../../components/humanImage/HumanImage'
// import ActivityCard from '../../components/activityCard/ActivityCard'
// const LeftPanel = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection:"column", alignItems:"center", width:"50%", fontFamily:"Poppins, sans-serif" }}>
      
//       {/* Search */}
//       <div style={{marginTop:"45px",width:"100%", display:"flex", justifyContent:"center"}}>
//        <SearchInput/>
//       </div>

//       {/* Dashboard */}
//       <div style={{width:"90%", display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"20px", }}>
//         <div style={{fontSize:"22px",letterSpacing:"-2px",color:"#2A2A64"}}>Dashboard</div>
//         <p style={{fontSize:"10px"}}>This Week <ChevronDown size={12} /></p>
//       </div>

//       {/* Human Body */}
//       <div style={{display:"flex", justifyContent:"space-between", width:"85%",marginTop:"10px"}}>
//         {/* Human image */}
//         <div><HumanImage/></div>
//         {/* Body Parts */}
//         <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between",height:"98%"}}>
//           <HealthCard icon="🫁" label="Lungs" date="26 Oct 2021" progressClass="custom-progress1" />
//           <HealthCard icon="🦷" label="Teeth" date="26 Oct 2021" progressClass="custom-progress2" />
//           <HealthCard icon="🦴" label="Bone" date="26 Oct 2021" progressClass="custom-progress3" />
//           <p style={{fontSize:"10px", height:"15px",display:"flex",justifyContent:"flex-end",alignItems:"center",marginRight:"-15px"}}><span style={{marginRight:"5px"}}>Details</span><ArrowRight size={10}/></p>
//         </div>
//       </div>

//       {/* Activity */}
//       <div style={{width:"90%", height:"130px",backgroundColor:"#F6FAFF", display:"flex", flexDirection:"column", marginTop:"10px", borderRadius:"20px", }}>
//         <ActivityCard/>
//       </div>
//     </div>
//   )
// }

// export default LeftPanel