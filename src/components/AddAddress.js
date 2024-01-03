import React, { useState } from "react";
import { api } from "../api/api";
import CitySelect from "./CitySelect";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/address", formData, {
        headers: {
          Authorization: ` ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDQzMjE1MzIsImV4cCI6MTcwNTk2MzEzMn0.X55gGkA0GRKXs3uF9HjSfzyvTj-74rDgzDxQtu67I4M"}`,
        },
      });

      console.log("Address added successfully:", response.data);

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
    } catch (error) {
      console.error("Error adding address:", error.message);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-5 p-4 gap-6 flex flex-col bg-white shadow-2xl rounded-md">
      <label className="block mb-2 font-bold">
        Adres Başlığı:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
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
      </label>
      <label className="font-bold ">
        Adresin kısa açıklaması:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="block w-full mt-1 p-2 border rounded-md font-extralight"
        />
      </label>
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
