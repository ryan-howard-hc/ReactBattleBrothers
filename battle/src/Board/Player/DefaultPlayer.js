import React from 'react';
import defaultsprite from './defaultsprite.png';

const hexSize = 50;

const PlayerToken = ({ position }) => {
  const x = position.q * hexSize * 1.5;
  const y = position.r * hexSize * 1.5;

  return (
    <div className="player-token" >
      <image href={defaultsprite} alt="Player Token" />
      {/* Player Token Placeholder Text */}
    </div>
  );
};

export default PlayerToken;