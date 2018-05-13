import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart/actions';
import './product.less';

const Product = ({ dispatch, product, onShowDetails }) => (
  <table className="product-tile">
    <thead>
      <tr>
        <th colSpan="2">
          <span className="product-tile__name" onClick={onShowDetails}>{product.name}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="product-tile__price">${product.price}</td>
        <td>
          <button
            className="product-tile__add-btn"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to cart
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default connect()(Product);
