import React from 'react';

export default function Tile(props) {

  function handleTileClick() {
    props.handleTileClick(props.sku);
  }

  const activeClass = props.activeTiles.indexOf(props.sku) > -1 ? ' tile-active' : '';

  return (
    <div className={`tile${activeClass}`}
      onClick={handleTileClick}>
      {props.text}
    </div>
  );
}
