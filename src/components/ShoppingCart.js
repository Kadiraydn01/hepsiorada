import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/action/shoppingAction";
import { AiOutlineDelete } from "react-icons/ai";

import OrderSummary from "./OrderSummary";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.shoppingCart.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="mx-auto py-8 w-4/5 mt-8 mb-8 flex gap-20">
      <div className="w-full mb-8">
        <h2 className="text-2xl font-bold text-center py-4">Sepetim</h2>
        {cartItems.length === 0 ? (
          <p>Sepetinizde ürün bulunmuyor!</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={item.product.id}
                className="flex items-center border border-black rounded-xl overflow-hidden py-12 px-4 mb-4 border-b"
              >
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="w-32 h-32 "
                />
                <div className="flex-grow px-10 justify-end w-full">
                  <span className="font-bold px-1">{item.product.name}</span>
                  <span className="">{item.product.description}</span>
                  <div className="flex items-center justify-center text-center mt-3">
                    <button
                      onClick={() => handleDecrementQuantity(item.product.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrementQuantity(item.product.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      +
                    </button>
                    <div className="mx-auto">
                      <button
                        onClick={() => handleRemoveFromCart(item.product.id)}
                        className="text-red-500 hover:text-red-700 mx-auto"
                      >
                        <AiOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center w-full py-5 ">
                  <h5>Yurtiçi Kargo</h5>
                  <h6 className="text-red-500">
                    {calculateTotal() >= 150
                      ? "Ücretsiz"
                      : "Ücretsiz kargo için sepet toplamı 150 TL ve üstü olmalıdır"}
                  </h6>
                </div>
                <div className="flex flex-col text-center items-center px-20 ">
                  <span className="text-sm">Adet: {item.quantity}</span>
                  <span className="text-sm">
                    Fiyat: ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <OrderSummary />
    </div>
  );
};

export default ShoppingCart;
