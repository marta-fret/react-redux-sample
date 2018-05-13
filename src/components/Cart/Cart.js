import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/actions';
import { getRandomElemFromArray } from './../../helpers/general';
import { priceFormatter } from './../../helpers/forView';
import './cart.less';

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
            <h1 className="page-header">Content of your cart</h1>
            <table className="cart-items">
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Sum</th>
                  <th>Remove/Add</th>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="cart-items__product-col">{item.name}</td>
                    <td className="cart-items__num-col">{item.price}</td>
                    <td className="cart-items__num-col">{item.count}</td>
                    <td className="cart-items__num-col">{priceFormatter(item.price * item.count)}</td>
                    <td className="cart-items__btn-col">
                      <button className='btn-main' onClick={this.getRemoveFromCartHandler(item.id)}>
                        -
                      </button>
                      <button className='btn-secondary' onClick={this.getAddToCartHandler(item)}>
                        +
                      </button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td className="cart-items__num-col">{this.props.totalAmount}</td>
                  <td className="cart-items__num-col">{priceFormatter(this.props.totalSum)}</td>
                  <td><button className='btn-secondary btn-buy' onClick={this.buyHandler}>Buy</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  totalSum: state.cart.totalSum,
  totalAmount: state.cart.totalAmount,
});

export default connect(mapStateToProps)(Cart);
