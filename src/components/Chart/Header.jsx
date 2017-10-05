import React from 'react';

export default function Header(props) {

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
    <div className={`header${highlightedClass}`}
      onClick={handleProductClick}
      onMouseEnter={handleProductMouseEnter}
      onMouseLeave={handleProductMouseLeave}>
      Header component
    </div>
  );
}
