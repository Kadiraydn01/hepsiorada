import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const OrderContinue = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  const [discountCode, setDiscountCode] = useState("");
  const history = useHistory();
  const handleCheckout = () => {
    history.push("/card");
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

  return (
    <div className="mt-10">
      <div className="w-[500px] border border-blue-500 rounded-2xl px-12 py-8">
        <h2 className="text-2xl font-bold text-center py-4">Sipariş Özeti</h2>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Ürün Toplamı:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-bold">Kargo Fiyatı:</span>
          <span className="font-bold text-lg">
            {calculateTotal() >= 150 ? "Ücretsiz" : "$40.00"}
          </span>
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
          Ödeme Yöntemini Seçin
        </button>
      </div>
    </div>
  );
};

export default OrderContinue;
