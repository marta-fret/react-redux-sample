import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/actions';
import { getRandomElemFromArray } from './../../helpers/general';

class Cart extends Component {
  buyHandler = productId => {
    const interval = setInterval(() => {
      if (this.props.cartItems.length) {
        const randomItem = getRandomElemFromArray(this.props.cartItems);
        this.props.dispatch(removeFromCart(randomItem.id, true));
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  getAddToCartHandler = item => (() => {
      this.props.dispatch(addToCart(item));
    }
  );

  getRemoveFromCartHandler = itemId => (() => {
      this.props.dispatch(removeFromCart(itemId));
    }
  );

  render() {
    return (
      <React.Fragment>
        {!this.props.cartItems.length && (
          <p>No products in your cart for now</p>
        )}
        {!!this.props.cartItems.length && (
          <div>
            <p>List of the products:</p>
            <table>
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Sum</th>
                  <th>Add/Remove</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>{item.price * item.count}</td>
                    <td>
                      <button onClick={this.getAddToCartHandler(item)}>
                        +
                      </button>
                      <button onClick={this.getRemoveFromCartHandler(item.id)}>
                        -
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>{this.props.totalAmount}</td>
                  <td>{this.props.totalPrice}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <button onClick={this.buyHandler}>Buy</button>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  totalPrice: state.cart.totalPrice,
  totalAmount: state.cart.totalAmount,
});

export default connect(mapStateToProps)(Cart);
