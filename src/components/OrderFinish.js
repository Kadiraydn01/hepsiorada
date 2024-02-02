import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "../api/api";

const OrderSummary = () => {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  const [discountCode, setDiscountCode] = useState("");
  const history = useHistory();

  const selectedAddress = useSelector((state) => state.order.selectedAddress);
  const selectedCard = useSelector((state) => state.order.selectedCard);

  const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
  const totalPrice = shoppingCart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const handleSubmitOrder = async () => {
    const orderData = {
      address_id: selectedAddress.selectedAddress.id,
      order_date: new Date().toISOString(),
      card_no: selectedCard.selectedCard.card_no,
      card_name: selectedCard.selectedCard.name_on_card,
      card_expire_month: selectedCard.selectedCard.expire_month,
      card_expire_year: selectedCard.selectedCard.expire_year,
      card_ccv: selectedCard.selectedCard.card_ccv,
      price: totalPrice,
      products: shoppingCart.map((item) => ({
        product_id: item.product.id,
        count: item.quantity,
        detail: item.product.description,
      })),
    };
    console.log("Order data:", orderData);
    try {
      const response = await api.post("/order", orderData, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      console.log("Order response:", response);
      alert("Sipariş başarıyla oluşturuldu!");
      history.push("/");
      localStorage.removeItem("shoppingCart");
      localStorage.removeItem("selectedAddress");
    } catch (error) {
      console.error(error);
    }
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
          onClick={handleSubmitOrder}
          className="bg-fuchsia-300 hover:bg-fuchsia-500 text-white w-full font-bold py-2 px-4 rounded"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
