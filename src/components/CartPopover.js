import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../store/action/shoppingAction";

const CartPopover = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.quantity * item.product.price,
      0
    );
  };

  return (
    <div className="relative">
      <button
        className="text-blue-500 hover:underline flex items-center text-center justify-center gap-2"
        onMouseEnter={toggleCart}
      >
        <a href="http://localhost:3000/cart">Sepetim</a>
        <AiOutlineShoppingCart />
      </button>

      {isCartOpen && (
        <div
          className="fixed top-20 right-10 z-10 w-2/3 bg-white shadow-lg rounded-md overflow-hidden"
          onMouseLeave={closeCart}
        >
          <div className="py-4 px-4">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleCart}
            >
              <i className="fa fa-shopping-cart"></i>
              <a className="ml-2" href="http://localhost:3000/cart">
                Sepetim
              </a>
            </button>
          </div>
          <div
            className="p-4 bg-gray-100"
            style={{ display: isCartOpen ? "block" : "none" }}
          >
            {cartItems.length === 0 ? (
              <p>Sepetiniz boş.</p>
            ) : (
              <>
                <ul>
                  {cartItems.map((item, index) => (
                    <li
                      key={item.product.id}
                      className="flex items-center p-4 mb-4 border-b"
                    >
                      <img
                        src={item.product.images[0].url}
                        alt={item.product.name}
                        className="w-32 h-32 mr-4"
                      />
                      <div className="flex-grow">
                        <span className="font-bold">{item.product.name}</span>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              handleDecrementQuantity(item.product.id)
                            }
                            className="text-gray-500 hover:text-gray-700"
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleIncrementQuantity(item.product.id)
                            }
                            className="text-gray-500 hover:text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm">Adet: {item.quantity}</span>
                        <span className="text-sm">
                          Fiyat: $
                          {(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => handleRemoveFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 mt-2"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="text-sm">Toplam Tutar:</span>
                  <span className="text-sm font-bold">
                    ${calculateTotalAmount().toFixed(2)}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPopover;
