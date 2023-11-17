import React from 'react';

class ShrubGenerator extends React.Component {
  constructor(props) {
    super(props);

    // shrubs and grid size
    this.numberOfShrubs = 15; // number of shrubs as needed
    this.gridSize = 8; //  grid size based on your configuration
    this.shrubs = this.generateRandomShrubs();
  }

  // random shrub positions within the grid
  generateRandomShrubs = () => {
    const shrubs = [];

    for (let i = 0; i < this.numberOfShrubs; i++) {
      const q = this.getRandomInt(-this.gridSize, this.gridSize);
      const r = this.getRandomInt(-this.gridSize, this.gridSize);
      const s = -q - r;
      
      // unique shrub positions
      if (!shrubs.some(shrub => shrub.q === q && shrub.r === r)) {
        shrubs.push({ q, r, s });
      }
    }

    return shrubs;
  };

  // random integer within a specified range
  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <div>
        {this.shrubs.map((shrub, index) => (
          <Hexagon
            key={index}
            q={shrub.q}
            r={shrub.r}
            s={shrub.s}
            // appearance of the shrub hexagons goes here
         >
            {'shrub'}
          </Hexagon>
        ))}
      </div>
    );
  }
}

export default ShrubGenerator;
