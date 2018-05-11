const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const addToCart = ({ id, name, price }) => ({
  type: actionTypes.ADD_TO_CART,
  product: {
    id,
    name,
    price,
  },
});

const removeFromCart = productId => ({
  type: actionTypes.REMOVE_FROM_CART,
  productId,
});

export { actionTypes as default, addToCart, removeFromCart };
