import React from 'react';

export default function Header(props) {

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
    <div className={`header${highlightedClass}`}
      onClick={handleProductClick}>
      Header component
    </div>
  );
}
