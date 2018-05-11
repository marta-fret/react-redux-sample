import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../../store/products/actions';
import Product from './../Product/Product';

class Products extends Component {
  componentDidMount() {
    if (this.props.products.length) {
      return;
    }

    fetch('https://api.myjson.com/bins/vajmu')
      .then(response => response.json())
      .then(products => {
        products.forEach(product => {
          this.props.dispatch(addProduct(product));
        });
      });
  }

  render() {
    return (
      <div>
        {this.props.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps)(Products);
