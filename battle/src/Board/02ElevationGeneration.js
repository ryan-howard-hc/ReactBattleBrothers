import React from 'react';


class Elevation extends React.Component {
    constructor(props) {
      super(props);
  
      this.numberOfTiles = 10; //  tiles, can adjust
      this.minElevation = 0; // min elevation value
      this.maxElevation = 5; // max elevation value
  
      this.elevations = this.generateElevations();
    }
  
    //  random elevations (TEMPORARY)
    generateElevations = () => {
      const elevations = [];
      for (let i = 0; i < this.numberOfTiles; i++) {
        const elevation = this.getRandomInt(this.minElevation, this.maxElevation);
        elevations.push(elevation);
      }
      return elevations;
    };
  
    // random integer within a specified range (TEMPORARY)
    getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    render() {
      return (
        <div>
          {this.elevations.map((elevation, index) => (
            <div key={index}>
              Elevation: {elevation}
            </div>
          ))}
        </div>
      );
    }
  }
  
  export default Elevation;