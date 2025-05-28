import React from 'react';
import '../styles/HumanImage.css';
import human4 from '../assets/human4.png';
import { Microscope, SearchX } from 'lucide-react';

const HumanImage = () => {
  return (
    <div className="human-image-container">
      {/* Microscope Icon */}
      <div className="microscope-icon"><SearchX size={16} /></div>

      {/* Human Image */}
      <img src={human4} alt="Human" className="human-image" />

      {/* Healthy Heart Tag */}
      <div className="healthy-heart-tag">❤️ Healthy Heart</div>

      {/* Healthy Leg Tag */}
      <div className="healthy-leg-tag">🦿 Healthy Leg</div>
    </div>
  );
};

export default HumanImage;
