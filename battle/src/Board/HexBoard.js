import React from 'react';
import { HexGrid, Layout, Hexagon } from 'react-hexgrid';

function HexagonalBoard({ size }) {
  const renderHexagons = () => {
    const hexagons = [];
    for (let q = -size; q <= size; q++) {
      for (let r = -size; r <= size; r++) {
        const s = -q - r;
        hexagons.push({ q, r, s });
      }
    }
    return hexagons.map((hexagon, index) => (
      <Hexagon
        key={index}
        q={hexagon.q}
        r={hexagon.r}
        s={hexagon.s}
        fill="white" 
      >
        <text x="0" y="5" fill="black" fontSize="8">{`${hexagon.q},${hexagon.r},${hexagon.s}`}</text>
      </Hexagon>
    ));
  };

  return (
    <HexGrid width={800} height={600}>
      <Layout size={{ x: 1, y: 1 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
        {renderHexagons()}
      </Layout>
    </HexGrid>
  );
}

export default HexagonalBoard;