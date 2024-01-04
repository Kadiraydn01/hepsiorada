import React, { useState } from "react";
import { api } from "../api/api";
import CitySelect from "./CitySelect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };
  const isValidInput = (value) => value.trim().length >= 3;
  const isFormValid = () => {
    const newFormErrors = {};

    for (const key in formData) {
      if (!isValidInput(formData[key])) {
        newFormErrors[key] = `En az 3 karakter giriniz.`;
      }
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
      const response = await api.post("/user/address", formData, {
        headers: {
          Authorization: ` ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDQzODMxNjAsImV4cCI6MTcwNjAyNDc2MH0.nM5LLwK-UtCjrLE2OeECkZnOI4Hh-bpj1sjobYP7rLI"}`,
        },
      });

      console.log("Adres bilgisi:", response.data);

      setFormData({
        title: "",
        name: "",
        surname: "",
        phone: "",
        city: "",
        district: "",
        neighborhood: "",
        address: "",
      });
      setFormErrors({});
      toast.success("Başarıyla eklendi!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error("Error adres:", error.message);
      toast.error("Hata oluştu. Lütfen tekrar deneyin.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <form className="max-w-md mx-auto mt-5 mb-5 p-4 gap-6 flex flex-col bg-white shadow-2xl rounded-md">
      <label className="block mb-2 font-bold">
        Adres Başlığı:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.title && <p className="text-red-500">{formErrors.title}</p>}
      </label>
      <label className="font-bold ">
        Ad:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md hover:scale-100 font-extralight "
        />
        {formErrors.name && <p className="text-red-500">{formErrors.name}</p>}
      </label>
      <label className="font-bold ">
        Soyad:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.surname && (
          <p className="text-red-500">{formErrors.surname}</p>
        )}
      </label>
      <label className="font-bold ">
        Telefon Numarası:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.phone && <p className="text-red-500">{formErrors.phone}</p>}
      </label>
      <label className="font-bold ">
        Şehir:
        <CitySelect onChange={handleChange} value={formData.city} />
      </label>
      <label className="font-bold ">
        İlçe:
        <input
          type="text"
          name="district"
          value={formData.district}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.district && (
          <p className="text-red-500">{formErrors.district}</p>
        )}
      </label>
      <label className="font-bold ">
        Mahalle-Sokak:
        <input
          type="text"
          name="neighborhood"
          value={formData.neighborhood}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.neighborhood && (
          <p className="text-red-500">{formErrors.neighborhood}</p>
        )}
      </label>
      <label className="font-bold ">
        Adresin kısa açıklaması:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
        {formErrors.address && (
          <p className="text-red-500">{formErrors.address}</p>
        )}
      </label>
      <ToastContainer />
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white p-2 rounded-md cursor-pointer"
      >
        Adresi ekle
      </button>
    </form>
  );
};

export default AddressForm;
