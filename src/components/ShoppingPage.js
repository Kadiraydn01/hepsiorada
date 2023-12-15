import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchProductsActionCreator,
} from "../store/action/productAction";
import { fetchCategories } from "../store/action/globalAction";
import { useState } from "react";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.productList);
  const selectedCategory = useSelector(
    (state) => state.products.currentCategory
  );

  const [sortOption, setSortOption] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchProductsActionCreator());
  }, [dispatch]);

  const handleSort = (option) => {
    setSortOption(option);
    toggleDropdown();

    let filterText = "";
    if (option === "asc") {
      filterText = "Filtre: Düşükten Yükseğe";
    } else if (option === "desc") {
      filterText = "Filtre: Yüksekten Düşüğe";
    }

    if (searchTerm && !sortOption) {
      setFilterType(`${filterText} ve Filtre: "${searchTerm}"`);
    } else if (searchTerm && sortOption) {
      setFilterType(`Filtre: "${searchTerm}"`);
    } else {
      setFilterType(filterText);
    }

    const sortedProducts = [...products].sort((a, b) => {
      if (option === "asc") {
        return a.price - b.price;
      } else if (option === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts([]);

    dispatch(
      fetchProductsActionCreator(null, option, sortedProducts, selectedCategory)
    );
  };
  const handleFilter = () => {
    const filtered = products.filter(filterProducts);
    setFilteredProducts(filtered);

    let newFilterType = "";
    if (searchTerm && sortOption) {
      newFilterType = `Filtre: "${searchTerm}" ve ${filterType}`;
    } else if (searchTerm && !sortOption) {
      newFilterType = `Filtre: "${searchTerm}"`;
    } else {
      newFilterType = filterType;
    }

    setFilterType(newFilterType);
    setSortOption("");

    dispatch(fetchProductsActionCreator(null, "", filtered, selectedCategory));
  };
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const filterProducts = (product) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(product.name) ||
      searchRegex.test(product.description) ||
      (product.color &&
        product.color.toLowerCase() === searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between  ml-10 mr-24 md:ml-72 md:mr-64 my-4">
        <p className="text-neutral-500 content-end  md:ml-0  font-bold flex border border-gray-300 rounded-md p-3 bg-white shadow-xl">
          {filterType || "Tüm ürünler"}
        </p>

        <div className="flex">
          <div className="relative">
            <div className="cursor-pointer" onClick={toggleDropdown}>
              <div className="flex mr-10 border border-gray-300 rounded-md p-3 bg-white shadow-xl">
                <p className="text-sky-500 font-bold ">Sırala</p>
              </div>
            </div>

            {isDropdownVisible && (
              <div className="absolute z-10 mt-1 bg-white rounded-md shadow-xl w-48">
                <div className="py-2 border-2 rounded-lg border-sky-500">
                  <p
                    className={`block px-4 py-2 cursor-pointer ${
                      sortOption === "asc" ? "bg-white" : ""
                    } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                    onClick={() => handleSort("asc")}
                  >
                    En Düşük Fiyat
                  </p>
                </div>
                <div className="mt-1">
                  <div className="py-2 border-2 rounded-lg border-sky-500">
                    <p
                      className={`block px-4 py-2 cursor-pointer ${
                        sortOption === "desc" ? "bg-gray-100" : ""
                      } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                      onClick={() => handleSort("desc")}
                    >
                      En Yüksek Fiyat
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Ürün Ara"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 mr-2 bg-white shadow-xl"
          />
          <button
            onClick={handleFilter}
            className="border border-gray-300 rounded-md p-2 bg-sky-500 text-white shadow-xl transition-transform duration-300 hover:shadow-none hover:scale-105"
          >
            Filtrele
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-auto justify-center ">
        {products.length > 0 ? (
          <div className="flex flex-wrap m-12 justify-center ml-48 mr-48 items-center">
            {(filteredProducts.length > 0 ? filteredProducts : products).map(
              (product, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center m-8 shadow-2xl text-center w-64 rounded-lg p-8 hover:shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    className="rounded-lg max-h-56"
                    src={product.images[0].url}
                    alt=""
                  />
                  <p className="text-xl font-bold mt-6 text-zinc-600">
                    {product.name}
                  </p>
                  <p className="text-sm">{product.description}</p>
                  <p className="text-lg font-bold text-green-500">{`${product.price.toFixed(
                    2
                  )} ₺`}</p>
                </div>
              )
            )}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
