import actionTypes from './actions';

const defaultState = [];

const productsReducer = (state = defaultState, action) => {
  if (action.abort) { // 'abort' tells the reducer, that action generator found a problem too big to let for changing state, but also to small to throw an error - so just ignore it and do nothing
    return state;
  }

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
