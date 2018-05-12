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

const removeFromCart = (productId, completely = false) => ({
  type: actionTypes.REMOVE_FROM_CART,
  productId,
  completely,
});

export { actionTypes as default, addToCart, removeFromCart };
