import React from 'react';
import './hexagon.css';
import Hexagon from './Hexagon'; 

const HexagonLayout = ({ rows, cols }) => {
  const hexagonGrid = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 1)
  );

  return (
    <div className="hexagon-layout">
      {hexagonGrid.map((row, rowIndex) => (
        <div className="hexagon-row" key={rowIndex}>
          {row.map((_, colIndex) => (
            <Hexagon key={`${rowIndex}-${colIndex}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default HexagonLayout;