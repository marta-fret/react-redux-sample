import { createStore, combineReducers } from 'redux';
import cartReducer from './cart/reducer';

export default () => (
  createStore(combineReducers({ // Notice: combineReducers for future use
    cart: cartReducer,
  }))
);