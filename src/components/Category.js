import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  setTopCategories,
} from "../store/action/globalAction";
import { setRoles } from "../store/action/action";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);
  const topCategories = useSelector((state) => state.global.topCategories);
  const loading = useSelector((state) => state.global.loading);
  const error = useSelector((state) => state.global.error);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState("e");

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(setRoles());
  }, [dispatch]);

  const handleCategoryClick = (gender, categoryId) => {};

  const handleGenderDropdownChange = (event) => {
    const selectedGenderValue = event.target.value;
    setSelectedGender(selectedGenderValue);
    setSelectedCategory(null);
  };

  const filteredCategories = categories.filter((category) =>
    category.code.startsWith(selectedGender)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="items-center flex">Categories</h2>
      <select onChange={handleGenderDropdownChange} value={selectedGender}>
        <option value="e">Men</option>
        <option value="k">Women</option>
      </select>

      <select
        onChange={(event) => setSelectedCategory(event.target.value)}
        value={selectedCategory}
      >
        <option value={null}>Select a category</option>
        {filteredCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.code}
          </option>
        ))}
      </select>

      <h2>Top Categories</h2>
      <ul className="flex gap-12 justify-evenly text-center">
        {topCategories.map((category) => (
          <li key={category.id}>
            <img
              className="w-40 h-60"
              src={category.img}
              alt={category.title}
            />
            <p>{category.title}</p>
            <p>Rating: {category.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
