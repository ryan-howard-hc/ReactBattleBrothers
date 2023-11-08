import React, { Component } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, Hex, HexUtils } from 'react-hexgrid';
import configs from './configurations.json';
import './board.css';
import PlayerToken from './Player/DefaultPlayer';

class HexagonalBoard extends Component {
  constructor(props) {
    super(props);
    const config = configs['rectangle'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);

    const initialPlayerTokenPosition = { q: 0, r: 0, s: 0 };


    this.state = { hexagons, config, playerTokenPosition: initialPlayerTokenPosition };
  }

  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }

  render() {
    const { hexagons, config, playerTokenPosition } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };

    return (
      <div className="App">
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {hexagons.map((hex, i) => (
              <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s} className="grassy-hexagon">
                <Text>{HexUtils.getID(hex)}</Text>
                {playerTokenPosition.q === hex.q && playerTokenPosition.r === hex.r && (
                  <PlayerToken /> 
                )}
              </Hexagon>
            ))}
          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default HexagonalBoard;


