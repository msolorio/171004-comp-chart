import React from 'react';
import './Tiles.css';

export default function Tiles(props) {
  return (
    <div className="tiles row">
      {props.children}
    </div>
  );
}
