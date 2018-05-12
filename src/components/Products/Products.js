import React, { Component } from 'react';
import Product from './../Product/Product';
import './products.less';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/vajmu')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          product.name = product.product;
          delete product.product;
        });

        this.setState(() => ({
          products,
        }));
      });
  }

  render() {
    return (
        <React.Fragment>
          {!this.state.products.length && <p>Loading...</p>}
          {!!this.state.products.length && <h1 className="page-header">List of products</h1>}
          <div className="products">
            {!!this.state.products.length &&
              this.state.products.map(product => (
                <Product key={product.id} product={product} />
              ))}
          </div>
        </React.Fragment>
    );
  }
}
