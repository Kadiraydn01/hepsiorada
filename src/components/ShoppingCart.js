import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/action/shoppingAction";
import { AiOutlineDelete } from "react-icons/ai";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart.cart);
  const [discountCode, setDiscountCode] = useState("");

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

  const calculateDiscount = () => {
    const total = calculateTotal();
    return total >= 150 ? 40 : 0;
  };

  const calculateFinalTotal = () => {
    const total = calculateTotal();
    const discount = calculateDiscount();
    let shippingCost = 40;

    const finalTotal = total - discount + shippingCost - applyDiscountCode();

    return finalTotal >= 0 ? finalTotal : 0;
  };

  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  const applyDiscountCode = () => {
    return 0;
  };

  const handleCheckout = () => {
    alert("Siparişiniz oluşturuldu");
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
                  <h6 className="text-red-500">Ücretsiz</h6>
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
      <div className="w-[500px] border border-blue-500 rounded-2xl px-12 py-8">
        <h2 className="text-2xl font-bold text-center py-4">Sipariş Özeti</h2>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Ürün Toplamı:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Kargo Fiyatı:</span>
          <span className="font-bold text-lg">$40.00</span>
        </div>
        <div className="flex justify-between mb-4  text-start">
          <div>
            <span className="font-bold">İndirim:</span>
            <span className="text-sm">
              (150$ ve üstü siparişlerinizde kargo gönderici ödemelidir)
            </span>
          </div>

          <span className="text-amber-500 font-bold text-lg">
            {calculateDiscount() !== 0 ? "-$40.00" : "$0.00"}
          </span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold text-green-400">Toplam:</span>
          <span>${calculateFinalTotal().toFixed(2)}</span>
        </div>
        {/* {calculateTotal() >= 150 && (
          <div className="mb-4">
            <span>Özel İndirim:</span>
            <span>$40.00</span>
          </div>
        )} */}
        <div className="mb-4 flex flex-col gap-2">
          <label>
            <span className="font-bold">İndirim Kodu:</span> (Kod için
            bildirimlere bakabilirsiniz)
          </label>
          <input
            type="text"
            value={discountCode}
            onChange={handleDiscountCodeChange}
            className="border border-gray-300 p-2 text-center"
            placeholder="#HEPSIORADA"
          />
          <button
            onClick={() => alert(`Discount code applied!`)}
            className="bg-blue-200 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded "
          >
            Uygula
          </button>
        </div>
        <button
          onClick={handleCheckout}
          className="bg-fuchsia-300 hover:bg-fuchsia-500 text-white w-full font-bold py-2 px-4 rounded"
        >
          Sepeti Onayla
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
