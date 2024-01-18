import React, { useEffect, useState } from "react";
import AddressForm from "./AddAddress";
import { api } from "../api/api";
import OrderContinue from "./OrderContinue";

const Order = () => {
  const [addresses, setAddresses] = useState([]);

  const [showAddressForm, setShowAddressForm] = useState(false);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/user/address", {
          headers: {
            Authorization: `${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDQzODMxNjAsImV4cCI6MTcwNjAyNDc2MH0.nM5LLwK-UtCjrLE2OeECkZnOI4Hh-bpj1sjobYP7rLI"}`,
          },
        });

        setAddresses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };

    fetchAddresses();
  }, []);

  const handleAddressFormSubmit = async (formData) => {
    try {
      const response = await api.post("/user/address", formData, {
        headers: {
          Authorization: ` ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIxLCJpYXQiOjE3MDQzODMxNjAsImV4cCI6MTcwNjAyNDc2MH0.nM5LLwK-UtCjrLE2OeECkZnOI4Hh-bpj1sjobYP7rLI"}`,
        },
      });

      console.log("Address added successfully:", response.data);

      setShowAddressForm(false);
    } catch (error) {
      console.error("Error adding address:", error.message);
    }
  };
  const handleClick = () => {
    setShowAddressForm((prevShowAddressForm) => !prevShowAddressForm);
  };

  return (
    <>
      <div className="flex">
        <div>
          <ul className="flex flex-wrap gap-4 justify-center py-10 ">
            {addresses
              .filter(
                (address) => address.title && address.name && address.surname
              )
              .map((address, index) => (
                <div
                  key={index}
                  className="bg-white cursor-pointer w-[300px] flex flex-col p-4 rounded-md shadow-md mb-4 transition-transform transform hover:shadow-2xl"
                >
                  <h3 className="text-xl font-bold mb-2">{address.title}</h3>
                  {address.name && <p className="mb-1">Name: {address.name}</p>}
                  {address.surname && (
                    <p className="mb-1">Surname: {address.surname}</p>
                  )}
                  {address.phone && (
                    <p className="mb-1">Phone: {address.phone}</p>
                  )}
                  {address.address && (
                    <p className="mb-1">Address: {address.address}</p>
                  )}
                </div>
              ))}
          </ul>
          <div>
            <button
              className="p-20 mb-5 flex justify-center items-center mx-auto cursor-pointer rounded-xl bg-violet-300 hover:bg-violet-400"
              onClick={handleClick}
            >
              Add a new address
            </button>
            {showAddressForm && (
              <AddressForm
                onSubmit={handleAddressFormSubmit}
                onCancel={handleClick}
              />
            )}
          </div>
        </div>
        <OrderContinue />
      </div>
    </>
  );
};

export default Order;
