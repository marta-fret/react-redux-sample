const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const addToCart = ({ id: productId = '' } = {}) => ({
  type: actionTypes.ADD_TO_CART,
  productId,
});

const removeFromCart = ({ id: productId = '' } = {}) => ({
  type: actionTypes.REMOVE_FROM_CART,
  productId,
});

export { actionTypes as default, addToCart, removeFromCart };

