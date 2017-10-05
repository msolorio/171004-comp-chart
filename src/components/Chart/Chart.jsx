import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Slider from './Slider';
import Feature from './Feature';
import productData from './productData';
import './Chart.css';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.handleProductClick = this.handleProductClick.bind(this);

    this.state = {
      productClicked: false
    };
  }

  handleProductClick(sku) {
    this.setState({productClicked: sku});
  }

  render() {
    const highlightedSkus = [
      this.props.recommendedSku
    ];

    return (
      <div className="chart">

        <div className="banners">
          <div className="row">
            {
              productData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Banner sku={product.sku}
                      recommendedSku={this.props.recommendedSku} />
                  </div>
                );
              })
            }
          </div>
        </div>

        <div className="headers">
          <div className="row">
            {
              productData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Header sku={product.sku}
                      recommendedSku={this.props.recommendedSku}
                      highlightedSkus={highlightedSkus}
                      handleProductClick={this.handleProductClick} />
                  </div>
                );
              })
            }
          </div>
        </div>

        <Slider />

        <div className="features">
          <div className="row">
            {
              productData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Feature sku={product.sku}
                      recommendedSku={this.props.recommendedSku}
                      highlightedSkus={highlightedSkus}
                      handleProductClick={this.handleProductClick} />
                  </div>
                );
              })
            }
          </div>
        </div>

      </div>
    );
  }
};
