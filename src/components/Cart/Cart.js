import React from 'react';
import { connect } from 'react-redux';

const Cart = props => (
  <div>
    {!props.cartItems.length && <p>
      No products in your cart for now
    </p>}
    {!!props.cartItems.length && (
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
                <button>+</button>
                <button>-</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

const getCartItems = state => {
  return state.cart.map(item => {
    const { name, price } = state.products.find(
      product => product.id === item.productId
    );
    return { ...item, name, price };
  });
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
});

export default connect(mapStateToProps)(Cart);
