import React, { Component } from 'react';
import Product from './../Product/Product';
import productsMockedData from './productsMockedData';
import './products.less';
import { classDef } from './../../helpers/forView';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productForDetails: undefined,
      showDetails: false,
    };
  }

  componentDidMount() {
    // mock async data loading
    setTimeout(() => {
      this.setState(() => ({
        products: productsMockedData,
      }));
    }, 2000);
  }

  showDetails = productForDetails => {
    this.setState(() => ({
      productForDetails,
      showDetails: true,
    }));
  };

  hideDetails = () => {
    this.setState(() => ({
      showDetails: false,
    }));
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.products.length && <p>Loading...</p>}
        {!!this.state.products.length && (
          <h1 className="page-header">List of products</h1>
        )}
        <div className="products">
          {!!this.state.products.length &&
            this.state.products.map(product => (
              <Product
                key={product.id}
                product={product}
                onShowDetails={() => {
                  this.showDetails(product);
                }}
              />
            ))}
        </div>
        <div
          className={classDef({
            'product-details': true,
            'product-details--hidden': !this.state.showDetails,
          })}
          onClick={this.hideDetails}
        >
          {this.state.productForDetails && (
            <div>
              <h3 className="product-details__header">
                {this.state.productForDetails.name}
              </h3>
              <span>{this.state.productForDetails.description}</span>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
