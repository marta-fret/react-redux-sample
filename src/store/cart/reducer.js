import actionTypes from './actions';

const defaultState = {
  items: [],
  totalSum: 0,
  totalAmount: 0,
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
    totalSum: state.totalSum + action.product.price,
    totalAmount: state.totalAmount + 1,
    items: state.items.map(item => {
      if (item.id === action.product.id) {
        added = true;
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    }),
  };

  if (!added) {
    newState.items.push({ ...action.product, count: 1 });
  }

  return newState;
};

const removeFromCart = (state, action) => {
  const newState = {
    items: [],
  };

  state.items.forEach(item => {
    if (item.id === action.productId) {
      updateStateForRemovingItem(newState, state, item, action.completely);
    } else {
      newState.items.push(item);
    }
  });

  return newState;
};

const updateStateForRemovingItem = (newState, oldState, item, completely) => {
  if (completely) {
    newState.totalAmount = oldState.totalAmount - item.count;        
    newState.totalSum = oldState.totalSum - (item.price * item.count);
  } else {
    newState.totalAmount = oldState.totalAmount - 1;        
    newState.totalSum = oldState.totalSum - item.price;
    if (item.count > 1) {
      newState.items.push({ ...item, count: item.count - 1 });
    }
  }
}

export default cartReducer;
