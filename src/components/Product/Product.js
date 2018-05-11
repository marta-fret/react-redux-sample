import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart/actions';

const Product = ({ dispatch, id, name, price }) => (
  <table>
    <tbody>
      <tr>
        <td colSpan="2">{name}</td>
      </tr>
      <tr>
        <td>${price}</td>
        <td>
          <button onClick={() => { dispatch(addToCart(id)); }}>Add to cart</button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default connect()(Product);