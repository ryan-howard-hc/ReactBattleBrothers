import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, HexUtils, Text } from 'react-hexgrid';

const PlayerToken = ({ q, r, s, spriteSrc, addNewToken }) => {
  const hexagonStyle = {
    fill: 'transparent',
    stroke: 'none',
  };

  const handleAddToken = () => {
    const newCoordinates = { q: q + 1, r: r - 1, s: s };
    addNewToken(newCoordinates, spriteSrc);
  };

    // updatePlayerTokenPosition = (newPosition) => {
  //   this.setState({ playerTokenPosition: newPosition });
  // };

  // handleMove = (newQ, newR, newS) => {
  //   // Call updatePlayerTokenPosition to update the player's position
  //   this.updatePlayerTokenPosition({ q: newQ, r: newR, s: newS });
  // };

  // const imageStyle = {
  //   width: '100%',
  //   height: '100%',
  //   pointerEvents: 'none',
  // };

  return (
    <Hexagon q={q} r={r} s={s} style={hexagonStyle}>
      <Text>{`${q},${r},${s}`}</Text>
      <image
        href={spriteSrc}
        x="-2.5%"
        y="-2.5%"
        width="5%"
        height="5%"
      />
    </Hexagon>
  );
};

export default PlayerToken;