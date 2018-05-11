import actionTypes from './actions';

const defaultState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0
};

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

  const newState = {
    totalPrice: state.totalPrice + action.product.price,
    totalAmount: state.totalAmount + 1,
    items: state.items.map(item => {
      if (item.id === action.product.id) {
        added = true;
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    })
  };

  if (!added) {
    newState.items.push({ ...action.product, count: 1 });
  }

  return newState;
};

const removeFromCart = (state, action) => {
  const newState = {
    items: [],
    totalAmount: state.totalAmount - 1,
  };

  state.items.forEach(item => {
    if (item.id === action.productId) {
      if (item.count > 1) {
        newState.items.push({ ...item, count: item.count - 1 });
      }
      newState.totalPrice = state.totalPrice - item.price;
    } else {
      newState.items.push(item);
    }
  });

  return newState;
};

export default cartReducer;
