import actionTypes from './actions';


const cartReducer = (state, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      // TODO
      return;
    case actionTypes.REMOVE_FROM_CART:
      // TODO
      return;
    default:
      return state;
  }
};

export default cartReducer;