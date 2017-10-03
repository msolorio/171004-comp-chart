import React, { Component } from 'react';
import Tiles from './Tiles/Tiles.jsx';
import Tile from './Tiles/Tile.jsx';
import Chart from './Chart/Chart.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTiles: []
    };
  }

  handleTileClick() {
    console.log('in handleTileClick');
  }

  render() {
    return (
      <div className="App">

        <Tiles>
          <Tile/>
        </Tiles>

        <Chart />
      </div>
    );
  }
}

export default App;
