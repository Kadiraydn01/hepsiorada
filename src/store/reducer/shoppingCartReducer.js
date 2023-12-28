import { shoppingActions } from "../action/shoppingAction";

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("shoppingCart");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState = {
  cart: loadCartFromLocalStorage(),
  payment: {},
  address: {},
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case shoppingActions.addToCart:
      const updatedCartAdd = [
        ...state.cart,
        { product: action.payload, quantity: 1 },
      ];

      localStorage.setItem("shoppingCart", JSON.stringify(updatedCartAdd));

      return {
        ...state,
        cart: updatedCartAdd,
      };

    case shoppingActions.removeFromCart:
      const filteredCartRemove = state.cart.filter(
        (item) => item.product.id !== action.payload
      );

      localStorage.setItem("shoppingCart", JSON.stringify(filteredCartRemove));

      return {
        ...state,
        cart: filteredCartRemove,
      };

    case shoppingActions.clearCart:
      localStorage.removeItem("shoppingCart");
      return {
        ...state,
        cart: [],
      };

    case shoppingActions.incrementQuantity:
      const updatedCartIncrement = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      localStorage.setItem(
        "shoppingCart",
        JSON.stringify(updatedCartIncrement)
      );

      return {
        ...state,
        cart: updatedCartIncrement,
      };

    case shoppingActions.decrementQuantity:
      const updatedCartDecrement = state.cart.map((item) =>
        item.product.id === action.payload
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );

      localStorage.setItem(
        "shoppingCart",
        JSON.stringify(updatedCartDecrement)
      );

      return {
        ...state,
        cart: updatedCartDecrement,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
