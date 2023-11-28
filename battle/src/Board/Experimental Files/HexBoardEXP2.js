import React, { Component } from 'react';
import Hexagon from './HexagonEXP2'; 
import './board.css';

class HexagonalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: { width: 100, height: 100 },
    };
  }

  componentDidMount() {
    this.updateGridSize();
    window.addEventListener('resize', this.updateGridSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGridSize);
  }

  updateGridSize = () => {
    const { innerWidth, innerHeight } = window;
    this.setState({
      gridSize: {
        width: innerWidth * 1,
        height: innerHeight * 0.9,
      },
    });
  };

  renderRow = (cols, row) => {
    const hexSize = 80; 

    const hexagons = [];
    for (let q = 0; q < cols; q++) {
      hexagons.push(<Hexagon key={`${q}_${row}`} q={q} r={row} hexSize={hexSize} />);
    }
    return hexagons;
  };

  render() {
    const { gridSize } = this.state;
    const rows = 12;
    const cols = 1;

    return (
      <div className="App">
        <div className="hexGridContainer" style={{ width: gridSize.width, height: gridSize.height, position: 'relative' }}>
          {[...Array(rows)].map((_, index) => (
            <div key={index} style={{ display: 'flex' }}>
              {this.renderRow(cols, index)}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HexagonalBoard;
