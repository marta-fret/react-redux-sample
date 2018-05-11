const actionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  RESET_PRODUCTS: 'RESET_PRODUCTS',
};

const addProduct = ({ id, product: name, price, description = '' } = {}) => {
  if ([id, name, price].some(prop => prop === undefined)) {
    // TODO Continue running, but log the warning in some way and tell the reducer to just ignore this product
    console.log(
      `Product must have id, name and price properties defined! Data: id: ${id}, name: ${name}, price: ${price}`
    );
    return {
      type: actionTypes.ADD_PRODUCT,
      abort: true,
    };
  }
  return {
    type: actionTypes.ADD_PRODUCT,
    product: {
      id,
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
