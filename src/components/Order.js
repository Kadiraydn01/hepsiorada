import React, { useEffect, useState } from "react";
import AddressForm from "./AddAddress";
import { api } from "../api/api";
import OrderContinue from "./OrderContinue";
import { useDispatch } from "react-redux";
import { setSelectedAddress } from "../store/action/shoppingAction";

const Order = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddressState, setSelectedAddressState] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await api.get("/user/address", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        });

        setAddresses(response.data);
      } catch (error) {
        console.error("Error fetching addresses:", error.message);
      }
    };

    fetchAddresses();
  }, []);

  const handleAddressSelect = (address) => {
    dispatch(setSelectedAddress(address));
    setSelectedAddressState(address);
  };

  const handleSelectAdress = (address) => {
    setSelectedAddressState(address);
  };

  const handleAddressFormSubmit = async (formData) => {
    try {
      const response = await api.post("/user/address", formData, {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
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
      <div className="flex justify-between mt-4 mx-4">
        <div className="">
          <h2 className="text-xl text-center mt-3 font-bold mb-4">
            Adreslerim
          </h2>
          <ul className="flex flex-wrap gap-4 my-3 justify-center py-10 ">
            {addresses
              .filter(
                (address) => address.title && address.name && address.surname
              )
              .map((address, index) => (
                <div
                  key={index}
                  className={`bg-white cursor-pointer w-[300px] flex flex-col p-4 rounded-md shadow-md mb-4 transition-transform transform hover:shadow-2xl ${
                    selectedAddressState === address ? "bg-green-200" : ""
                  }`}
                  onClick={() => handleAddressSelect(address)}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddressState === address}
                    onChange={() => handleSelectAdress(address)}
                    className="w-6 h-6 mb-2 ml-60 cursor-pointer  flex"
                  />
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
              className="p-8 mb-5 flex justify-center items-center mx-auto cursor-pointer rounded-xl bg-violet-300 hover:bg-violet-400"
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
        <div className="mb-10">
          <OrderContinue />
        </div>
      </div>
    </>
  );
};

export default Order;
