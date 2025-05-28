// src/components/rightPanelButtons/RightPanelButtons.js
import React from 'react';
import { Plus } from 'lucide-react';
import { rightPanelButtonsData } from '../data/rightPanelButtonsData';
import '../styles/RightPanelButtons.css';

const RightPanelButtons = () => {
  return (
    <div className="right-panel-buttons">
      {rightPanelButtonsData.map((btn, index) => (
        <button key={index} className={btn.className}>
          {btn.isPlusIcon ? <Plus size={16} /> : btn.emoji}
        </button>
      ))}
    </div>
  );
};

export default RightPanelButtons;








// import React from 'react';
// import './RightPanelButtons.css';
// import { rightPanelButtonsData } from './rightPanelButtonsData';

// const RightPanelButtons = () => {
//   return (
//     <div className="right-panel-buttons">
//       {rightPanelButtonsData.map((btn, index) => (
//         <button key={index} className={btn.className}>
//           {btn.icon}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default RightPanelButtons;
