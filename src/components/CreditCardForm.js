import React, { useState, useEffect, useRef } from "react";
import { api } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OrderSummary from "./OrderSummary";

const CreditCardForm = () => {
  const [cardData, setCardData] = useState({
    card_no: "",
    expire_month: 1,
    expire_year: 2025,
    name_on_card: "",
  });
  const [formErrors, setFormErrors] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const formRef = useRef(null);

  const fetchSavedCards = async () => {
    try {
      const response = await api.get("/user/card", {
        headers: {
          Authorization: ` ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDU2MDQzNTQsImV4cCI6MTcwNzI0NTk1NH0.p3tAq8HPlIZOuLHWrlov0pG2hJ0N0wPaipH6EqpyeqU"}`,
        },
      });
      setSavedCards(response.data);
    } catch (error) {
      console.error("Kart bilgileri getirilirken hata oluştu:", error.message);
    }
  };

  useEffect(() => {
    fetchSavedCards();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const isValidCardNo = (value) => /^\d{16}$/.test(value);
  const isValidExpireMonth = (value) =>
    /^\d{1,2}$/.test(value) && value >= 1 && value <= 12;
  const isValidExpireYear = (value) => /^\d{4}$/.test(value);
  const isValidNameOnCard = (value) => value.trim().length >= 3;

  const isFormValid = () => {
    const newFormErrors = {};

    if (!isValidCardNo(cardData.card_no)) {
      newFormErrors.card_no = "Kredi kartı numarası 16 haneli olmalıdır.";
    }

    if (!isValidExpireMonth(cardData.expire_month)) {
      newFormErrors.expire_month = "Geçerli bir ay giriniz.";
    }

    if (!isValidExpireYear(cardData.expire_year)) {
      newFormErrors.expire_year = "Geçerli bir yıl giriniz.";
    }

    if (!isValidNameOnCard(cardData.name_on_card)) {
      newFormErrors.name_on_card = "En az 3 karakter giriniz.";
    }

    setFormErrors(newFormErrors);

    return Object.keys(newFormErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      console.error("Lütfen gerekli alanları doldurunuz");
      return;
    }

    try {
      const response = await api.post("/user/card", cardData, {
        headers: {
          Authorization: ` ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDU2MDQzNTQsImV4cCI6MTcwNzI0NTk1NH0.p3tAq8HPlIZOuLHWrlov0pG2hJ0N0wPaipH6EqpyeqU"}`,
        },
      });

      console.log("Kart bilgisi:", response.data);

      setCardData({
        card_no: "",
        expire_month: 1,
        expire_year: 2025,
        name_on_card: "",
      });
      setFormErrors({});
      toast.success("Kredi kartı başarıyla eklendi!", {
        position: "top-right",
        autoClose: 3000,
      });

      fetchSavedCards();
    } catch (error) {
      console.error("Kredi kartı eklenirken hata oluştu:", error.message);
      toast.error("Hata oluştu. Lütfen tekrar deneyin.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleSelectCard = (selectedCard) => {
    setCardData({
      card_no: selectedCard.card_no,
      expire_month: selectedCard.expire_month,
      expire_year: selectedCard.expire_year,
      name_on_card: selectedCard.name_on_card,
    });

    setShowForm(true);
  };

  const handleOutsideClick = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      console.log("Tıklama: Form dışında");
      setShowForm(false);
    } else {
      console.log("Tıklama: Form içinde");
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="border-r-2 my-5 h-screen w-[500px]">
          <div className="flex my-16 mx-6 flex-col gap-6">
            <div>
              <button
                className="flex items-center ml-20 gap-1 border px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-xl"
                onClick={() => setShowForm(true)}
              >
                <img
                  src="https://img.icons8.com/color/48/000000/visa.png"
                  alt="card"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                  alt="card"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/maestro.png"
                  alt="card"
                />
                Başka bir kartla ödemek istiyorum
              </button>
              {showForm && (
                <form
                  ref={formRef}
                  className="max-w-md mx-auto mt-5 mb-5 p-4 gap-6 flex flex-col bg-white shadow-2xl rounded-md"
                >
                  <label className="block mb-2 font-bold">
                    Kart Numarası:
                    <input
                      type="text"
                      name="card_no"
                      value={cardData.card_no}
                      onChange={handleChange}
                      className="block w-full mt-1 p-2 border rounded-md font-extralight"
                    />
                    {formErrors.card_no && (
                      <p className="text-red-500">{formErrors.card_no}</p>
                    )}
                  </label>
                  <label className="font-bold ">
                    Son Kullanma Tarihi - Ay:
                    <input
                      type="number"
                      name="expire_month"
                      value={cardData.expire_month}
                      onChange={handleChange}
                      className="block w-full mt-1 p-2 border rounded-md hover:scale-100 font-extralight"
                    />
                    {formErrors.expire_month && (
                      <p className="text-red-500">{formErrors.expire_month}</p>
                    )}
                  </label>
                  <label className="font-bold ">
                    Son Kullanma Tarihi - Yıl:
                    <input
                      type="number"
                      name="expire_year"
                      value={cardData.expire_year}
                      onChange={handleChange}
                      className="block w-full mt-1 p-2 border rounded-md font-extralight"
                    />
                    {formErrors.expire_year && (
                      <p className="text-red-500">{formErrors.expire_year}</p>
                    )}
                  </label>
                  <label className="font-bold ">
                    Kart Üzerindeki İsim:
                    <input
                      type="text"
                      name="name_on_card"
                      value={cardData.name_on_card}
                      onChange={handleChange}
                      className="block w-full mt-1 p-2 border rounded-md font-extralight"
                    />
                    {formErrors.name_on_card && (
                      <p className="text-red-500">{formErrors.name_on_card}</p>
                    )}
                  </label>
                  <ToastContainer />
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="mt-4 bg-green-500 text-white p-2 rounded-md cursor-pointer"
                  >
                    Kredi Kartı Ekle
                  </button>
                </form>
              )}
            </div>
            <div className="w-[600px] gap-8 flex flex-wrap">
              {savedCards.length > 0 ? (
                savedCards.map(
                  (savedCard) =>
                    (savedCard.card_no || savedCard.name_on_card) && (
                      <div
                        key={savedCard.id}
                        className="border px-4 py-3 w-[200px] bg-slate-100 hover:bg-slate-300 rounded-xl text-right m-2 cursor-pointer"
                        onClick={() => handleSelectCard(savedCard)}
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
                          alt="card"
                        />
                        {savedCard.card_no && <p>{savedCard.card_no}</p>}
                        {savedCard.name_on_card && (
                          <p>{savedCard.name_on_card}</p>
                        )}
                      </div>
                    )
                )
              ) : (
                <p>Kaydedilmiş kart bulunmamaktadır.</p>
              )}
            </div>
          </div>
        </div>
        <div className="my-5">
          <OrderSummary />
        </div>
      </div>
    </>
  );
};

export default CreditCardForm;
