import { api } from "../api/api";
import React, { useState, useEffect } from "react";

const LastOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/order", {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      });
      setOrders(response.data);
    } catch (error) {
      console.error("Kart bilgileri getirilirken hata oluştu:", error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1>Siparişler</h1>
      {orders.map((order, index) => (
        <div
          className="flex flex-col cursor-pointer border p-4 bg-slate-100 rounded-xl  hover:bg-slate-300 gap-4 my-3 w-[800px] text-center justify-around"
          key={index}
        >
          <h2>Sipariş {index + 1}</h2>
          <div className="flex  justify-evenly items-center text-center gap-2 ">
            <div className="flex items-center gap-20 text-center">
              <p>Sipariş id: {order.id}</p>
              <p>Sipariş Tarihi:{order.order_date}</p>
              <p>Toplam Fiyat:{order.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastOrders;
