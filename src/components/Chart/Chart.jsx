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
  }

  render() {
    return (
      <div className="chart">

        <div className="banners">
          <div className="row">
            {
              productData.products.map((product, index) => {
                return (
                  <div className="col" key={index}>
                    <Banner sku={product.sku} />
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
                    <Header sku={product.sku} />
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
                    <Feature sku={product.sku} />
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
