import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart/actions';

const Product = ({ dispatch, product }) => (
  <table>
    <tbody>
      <tr>
        <td colSpan="2">{product.name}</td>
      </tr>
      <tr>
        <td>${product.price}</td>
        <td>
          <button onClick={() => { 
            dispatch(addToCart(product)); 
          }}>
            Add to cart
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default connect()(Product);