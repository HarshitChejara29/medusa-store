import React from 'react';
import './Marquee.css'; // Import CSS file for animation

interface MarqueeProps {
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
