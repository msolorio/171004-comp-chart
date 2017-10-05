import React from 'react';

export default function Feature(props) {

  function handleProductClick() {
    props.handleProductClick(props.sku);
  }

  function handleProductMouseEnter() {
    props.handleProductMouseEnter(props.sku);
  }

  function handleProductMouseLeave() {
    props.handleProductMouseLeave();
  }

  const highlightedClass = (
    !props.recommendedSku
    || props.highlightedSkus.indexOf(props.sku) > -1
    ? ' highlighted'
    : ''
  );

  return (
    <div className={`feature${highlightedClass}`}
      onClick={handleProductClick}
      onMouseEnter={handleProductMouseEnter}
      onMouseLeave={handleProductMouseLeave}>
      Feature component
    </div>
  );
}
