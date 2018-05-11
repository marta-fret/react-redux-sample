import actionTypes from './actions';

const defaultState = [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action);
    default:
      return state;
  }
};

const addToCart = (state, action) => {
  let added = false;

  const newState = state.map(item => {
    if (item.productId === action.productId) {
      added = true;
      return { ...item, count: item.count + 1 };
    } else {
      return item;
    }
  });

  if (!added) {
    newState.push({ productId: action.productId, count: 1 });
  }

  return newState;
};

const removeFromCart = (state, action) => {
  const newState = [];

  state.forEach(item => {
    if (item.productId === action.productId) {
      if (item.count > 1) {
        newState.push({ ...item, count: item.count - 1 });
      }
    } else {
      newState.push(item);
    }
  });

  return newState;
};

export default cartReducer;
