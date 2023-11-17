import React from 'react';
import defaultsprite from './defaultsprite.png';

const hexSize = 50;

const PlayerToken = ({ position, currentPlayerPosition }) => {
  const x = position.q * hexSize * 1.5;
  const y = position.r * hexSize * 1.5;

  const isVisible = currentPlayerPosition.q === position.q && currentPlayerPosition.r === position.r;

  const tokenStyle = {
    position: 'absolute',
    top: y,
    left: x,
    display: isVisible ? 'block' : 'none',
  };
  console.log('PlayerToken rendered for position:', position);
  return (
    <div className="player-token" style={tokenStyle}>
      <img src={defaultsprite} alt="Player Token" />
      {/* Player Token Placeholder Text */}
    </div>
  );
};

export default PlayerToken;