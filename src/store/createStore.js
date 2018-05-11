import { createStore, combineReducers } from 'redux';
import productsReducer from './products/reducer';
import cartReducer from './cart/reducer';

export default () => (
  createStore(combineReducers({
    products: productsReducer, 
    cart: cartReducer,
  }))
);