import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/actions';

const Cart = props => (
  <React.Fragment>
    {!props.cartItems.length && <p>No products in your cart for now</p>}
    {!!props.cartItems.length && (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Add/Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => { props.dispatch(addToCart(item)); }}>+</button>
                  <button onClick={() => { props.dispatch(removeFromCart(item.id)); }}>-</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>{props.totalPrice}</p>
        <p>{props.totalAmount}</p>
      </React.Fragment>
    )}
  </React.Fragment>
);

const mapStateToProps = state => ({
  cartItems: state.cart.items,
  totalPrice: state.cart.totalPrice,
  totalAmount: state.cart.totalAmount,
});

export default connect(mapStateToProps)(Cart);
