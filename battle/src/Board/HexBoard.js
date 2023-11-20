import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, Hex, HexUtils } from 'react-hexgrid';
import configs from './configurations.json';
import './board.css';
import PlayerToken from './Player/DefaultPlayer';
import sprite from '../Board/Player/defaultsprite.png';


class HexagonalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      // hexagons: [],
      // config: null, // Initialize config
      // playerTokenPosition: { q: 0, r: 0, s: 0 },
      // gridSize: { width: 100, height: 100 },
    };
  }

  componentDidMount() {
    this.updateGridSize();
    window.addEventListener('resize', this.updateGridSize);

    // Fetch the default configuration when the component mounts
    const defaultConfigName = 'rectangle';
    this.loadConfiguration(defaultConfigName);
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

  loadConfiguration = (configName) => {
    const config = configs[configName];
    if (config) {
      const generator = GridGenerator.getGenerator(config.map);
      const hexagons = generator.apply(this, config.mapProps);
      this.setState({ hexagons, config });
    }
  };

  changeType(event) {
    const name = event.currentTarget.value;
    this.loadConfiguration(name);
  }
  
  addNewToken = (coordinates, spriteSrc) => {
    const { playerTokens } = this.state;
    const newToken = {
      q: coordinates.q,
      r: coordinates.r,
      s: coordinates.s,
      id: playerTokens.length + 1,
      spriteSrc,
    };
    this.setState({ playerTokens: [...playerTokens, newToken] });
  };

  render() {
    const { playerTokens } = this.state;

    const { hexagons, config, gridSize } = this.state;

    if (!config) {
      return null;
    }

    const layout = config.layout;
    const size = layout ? { x: layout.width, y: layout.height } : { x: 0, y: 0 };

    return (
      <div className="App">
        <HexGrid width={gridSize.width} height={gridSize.height}>
          
        {layout && (
            <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
              {/*  RENDER EXISTING TOKENSs */}
              {playerTokens.map((token) => (
                <PlayerToken
                  key={token.id}
                  q={token.q}
                  r={token.r}
                  s={token.s}
                  spriteSrc={token.spriteSrc}
                />
              ))}
            </Layout>
          )}
        </HexGrid>
      </div>
    );
  }
}

export default HexagonalBoard;