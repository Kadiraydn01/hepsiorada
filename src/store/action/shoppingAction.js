import { SET_SELECTED_ADDRESS } from "./ActionType";

export const setSelectedAddress = (address) => ({
  type: SET_SELECTED_ADDRESS,
  payload: address,
});

export const shoppingActions = Object.freeze({
  addToCart: "ADD_TO_CART",
  removeFromCart: "REMOVE_FROM_CART",
  clearCart: "CLEAR_CART",
  incrementQuantity: "INCREMENT_QUANTITY",
  decrementQuantity: "DECREMENT_QUANTITY",
});

export const addToCart = (product) => {
  console.log("Adding to cart:", product);
  return {
    type: shoppingActions.addToCart,
    payload: product,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: shoppingActions.removeFromCart,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: shoppingActions.clearCart,
  };
};
export const incrementQuantity = (productId) => ({
  type: shoppingActions.incrementQuantity,
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: shoppingActions.decrementQuantity,
  payload: productId,
});
