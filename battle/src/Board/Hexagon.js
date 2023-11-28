import React from 'react';
import './hexagon.css';

const Hexagon = ({ style }) => {
    return (
      <div className="hexagon" style={style}>
        <div className="hexagon-content">
          <div className="hex-top"></div>
          <div className="hex-middle"></div>
          <div className="hex-bottom"></div>
        </div>
      </div>
    );
  };

export default Hexagon;