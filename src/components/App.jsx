import React, { Component } from 'react';
import Tiles from './Tiles/Tiles.jsx';
import Chart from './Chart/Chart.jsx';
import calculateSku from '../utilities/calculateSku';
import skuRanking from '../utilities/skuRanking';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTiles: []
    };

    this.handleTileClick = this.handleTileClick.bind(this);
  }

  handleTileClick(sku) {
    this.setState((prevState) => {
      let newActiveTiles;

      if (prevState.activeTiles.indexOf(sku) > -1) {
        newActiveTiles = prevState.activeTiles.filter(tile => tile !== sku);
      } else {
        newActiveTiles = prevState.activeTiles.concat([sku]);
      }

      return { activeTiles: newActiveTiles };
    });
  }

  render() {
    const recommendedSku = calculateSku(this.state.activeTiles, skuRanking);

    return (
      <div className="App">
        <Tiles handleTileClick={this.handleTileClick}
          activeTiles={this.state.activeTiles} />
        <Chart recommendedSku={recommendedSku} />
      </div>
    );
  }
}

export default App;
