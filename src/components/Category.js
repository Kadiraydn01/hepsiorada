import React, { useEffect } from "react";
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

  console.log("cate:", categories);
  useEffect(() => {
    dispatch(fetchCategories());

    dispatch(setRoles());
  }, [dispatch]);

  const handleCategoryClick = (gender, categoryId) => {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button onClick={() => handleCategoryClick("male", category.id)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <h2>Top Categories</h2>
      <ul>
        {topCategories.map((category) => (
          <li key={category.id}>
            <img src={category.imageUrl} alt={category.name} />
            <p>{category.name}</p>
            <p>Rating: {category.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
