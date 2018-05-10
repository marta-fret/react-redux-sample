import actionTypes from './actions';

const defaultState = [];

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return [ ...state, action.product ];
    case actionTypes.RESET_PRODUCTS:
      return [];
    default:
      return state;
  }
};

export default productsReducer;
