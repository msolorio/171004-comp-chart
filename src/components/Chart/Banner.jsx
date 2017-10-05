import React from 'react';

export default function Banner(props) {
  const banner = <div className="banner">Recommended</div>

  return (
    <div className="bannerWrap">
      {props.sku === props.recommendedSku && banner}
    </div>
  );
}
