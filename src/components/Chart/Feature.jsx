import React from 'react';

export default function Feature(props) {

  function handleProductClick() {
    props.handleProductClick(props.sku);
  }

  const highlightedClass = (
    !props.recommendedSku
    || props.highlightedSkus.indexOf(props.sku) > -1
    ? ' highlighted'
    : ''
  );

  return (
    <div className={`feature${highlightedClass}`}
      onClick={handleProductClick}>
      Feature component
    </div>
  );
}
