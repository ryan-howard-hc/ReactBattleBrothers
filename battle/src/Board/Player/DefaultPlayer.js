import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator } from 'react-hexgrid';

const PlayerToken = ({ q, r, s, spriteSrc }) => {
  const hexagonStyle = {
    fill: 'transparent',
    stroke: 'none',
  };

  // const imageStyle = {
  //   width: '100%',
  //   height: '100%',
  //   pointerEvents: 'none',
  // };

  return (
    <Hexagon q={q} r={r} s={s} style={hexagonStyle}>
      <image
        href={spriteSrc}
        x="-25%" 
        y="-25%" 
        width="5%" 
        height="5%" 
        // style={imageStyle}
      />
    </Hexagon>
  );
};

export default PlayerToken;