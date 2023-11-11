import React from 'react';

class RockGenerator extends React.Component {
  constructor(props) {
    super(props);

    // number of rocks and grid size
    this.numberOfRocks = 10; // can adjust the number of rocks as needed
    this.gridSize = 8; // can adjust the grid size based on your configuration
    this.rocks = this.generateRandomRocks();
  }

  //= random rock positions within the grid
  generateRandomRocks = () => {
    const rocks = [];

    for (let i = 0; i < this.numberOfRocks; i++) {
      const q = this.getRandomInt(-this.gridSize, this.gridSize);
      const r = this.getRandomInt(-this.gridSize, this.gridSize);
      const s = -q - r;
      
      // ensures unique rock positions
      if (!rocks.some(rock => rock.q === q && rock.r === r)) {
        rocks.push({ q, r, s });
      }
    }

    return rocks;
  };

  // Generate a random integer within a specified range
  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <div>
        {this.rocks.map((rock, index) => (
          <Hexagon
            key={index}
            q={rock.q}
            r={rock.r}
            s={rock.s}
            // Customize the appearance of the rock hexagons?????????terrain type, color, or size
          >
            {'rock'}
          </Hexagon>
        ))}
      </div>
    );
  }
}

export default RockGenerator;
