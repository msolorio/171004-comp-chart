import React from 'react';
import './Tiles.css';
import Tile from './Tile.jsx';
import tileData from './tilesData';

export default function Tiles(props) {
  return (
    <div className="tiles row">
      {
        tileData.tiles.map((tile, index) => {
          return (
            <div className="col"
              key={index}>
              <Tile {...tile}
                handleTileClick={props.handleTileClick}
                activeTiles={props.activeTiles} />
            </div>
          );
        })
      }
    </div>
  );
}
