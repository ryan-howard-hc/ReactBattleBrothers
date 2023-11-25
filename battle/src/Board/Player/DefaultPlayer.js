import React from 'react';
import { HexGrid, Layout, Hexagon, GridGenerator, HexUtils, Text } from 'react-hexgrid';

class PlayerToken extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: 0,
      r: 0,
      s: 0,
    };
  }

  handleClick = () => {
    const { q, r, s } = this.state;
    this.props.updatePlayerTokenPosition({ q, r, s });
  };

  componentDidMount() {
    const { q, r, s } = this.props;
    this.setState({ q, r, s });
  }

  render() {
    const { q, r, s } = this.state;
    const { spriteSrc } = this.props;

    const hexagonStyle = {
      fill: 'transparent',
      stroke: 'none',
    };

    return (
      <Hexagon q={q} r={r} s={s} style={hexagonStyle} onClick={this.handleClick}>
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
  }
}

export default PlayerToken;

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

