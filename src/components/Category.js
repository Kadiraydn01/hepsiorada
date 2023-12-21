import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../store/action/globalAction";
import { setRoles } from "../store/action/action";
import { fetchProducts } from "../store/action/productAction";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.global.categories);
  const topCategories = useSelector((state) => state.global.topCategories);
  const loading = useSelector((state) => state.global.loading);
  const error = useSelector((state) => state.global.error);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMenDropdownVisible, setIsMenDropdownVisible] = useState(false);
  const [isWomenDropdownVisible, setIsWomenDropdownVisible] = useState(false);
  const menButtonRef = useRef(null);
  const womenButtonRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(setRoles());

    const handleClickOutside = (event) => {
      if (
        (menButtonRef.current &&
          !menButtonRef.current.contains(event.target)) ||
        (womenButtonRef.current &&
          !womenButtonRef.current.contains(event.target))
      ) {
        setIsMenDropdownVisible(false);
        setIsWomenDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleMenDropdownToggle = () => {
    setSelectedCategory(null);
    setIsMenDropdownVisible(!isMenDropdownVisible);
    setIsWomenDropdownVisible(false);
  };

  const handleWomenDropdownToggle = () => {
    setSelectedCategory(null);
    setIsMenDropdownVisible(false);
    setIsWomenDropdownVisible(!isWomenDropdownVisible);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsMenDropdownVisible(false);
    setIsWomenDropdownVisible(false);

    dispatch(fetchProducts(categoryId, null, null));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredTopCategories = selectedCategory
    ? topCategories.filter((category) => category.id === selectedCategory)
    : topCategories;

  return (
    <div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-evenly gap-20 py-8 ">
          <div className="dropdown-container ">
            <button
              onClick={handleMenDropdownToggle}
              className="toggle-dropdown-button"
              ref={menButtonRef}
            >
              Men
            </button>
            {isMenDropdownVisible && (
              <ul className="dropdown-menu">
                {categories
                  .filter((category) => category.code.startsWith("e"))
                  .map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.title}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="dropdown-container">
            <button
              onClick={handleWomenDropdownToggle}
              className="toggle-dropdown-button"
              ref={womenButtonRef}
            >
              Women
            </button>
            {isWomenDropdownVisible && (
              <ul className="dropdown-menu">
                {categories
                  .filter((category) => category.code.startsWith("k"))
                  .map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.title}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <ul className="flex gap-12 justify-evenly text-center">
          {filteredTopCategories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              <img
                className="w-40 h-60 cursor-pointer"
                src={category.img}
                alt={category.title}
              />
              <p className="cursor-pointer">{category.title}</p>
              <p>Rating: {category.rating}</p>
            </li>
          ))}
        </ul>
        <div className="ml-4">
          {selectedCategory && (
            <div>
              {categories
                .filter((category) => category.id === selectedCategory)
                .map((category) => (
                  <div key={category.id}>
                    <p>{category.title}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
