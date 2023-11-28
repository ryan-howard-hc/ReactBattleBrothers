import React from 'react';
import './hexagon.css'; 

const Hexagon = ({ q, r, hexSize }) => {
  const calculateX = () => {
    return (3 / 2) * hexSize * q;
  };

  const calculateY = () => {
    return (hexSize * Math.sqrt(3)) / 3.5 * (2 * r + q % 2);
  };

  const x = calculateX();
  const y = calculateY();

  return (
    <div
      className="hexagon"
      style={{
        width: `${hexSize}px`,
        height: `${hexSize}px`,
        top: `${y}px`,
        left: `${x}px`,
        position: 'absolute',
      }}
    >
      <div className="hexagon-content">
        <span>{`${q},${r},${-q - r}`}</span>
      </div>
    </div>
  );
};

export default Hexagon;

