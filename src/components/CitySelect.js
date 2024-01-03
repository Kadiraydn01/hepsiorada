import React from "react";
import { cities } from "../data/cities";

const CitySelect = ({ onChange, value }) => {
  return (
    <select
      name="city"
      value={value}
      onChange={onChange}
      className="block font-extralight w-full mt-1 p-2 border rounded-md"
    >
      <option value="" disabled>
        Şehir Seçiniz
      </option>
      {cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelect;
