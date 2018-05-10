const actionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
};

const addProduct = ({ id, product: name, price, description = '' } = {}) => {
  if ([id, name, price].some(prop => prop === undefined)) {
    throw 'Product must have id, name and price properties defined!';
  }
  return {
    type: actionTypes.ADD_PRODUCT,
    product: {
      name,
      price,
      description,
    },
  };
};

const resetProducts = () => ({
  type: actionTypes.RESET_PRODUCTS,
});

export { actionTypes as default, addProduct, resetProducts };
