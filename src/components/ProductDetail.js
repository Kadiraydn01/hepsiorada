import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../store/action/globalAction";
import { fetchProducts } from "../store/action/productAction";
import { fetchProductsActionCreator } from "../store/action/productAction";
import InfiniteScroll from "react-infinite-scroll-component";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.productList);
  const [offset, setOffset] = useState(0);
  const [sortOption, setSortOption] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterType, setFilterType] = useState("");
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(fetchProductsActionCreator());
  }, [dispatch]);

  if (loading) {
    return (
      <p style={{ textAlign: "center" }}>
        Ürünler hazırlanırken beklediğiniz için teşekkür ederiz.
        <br></br>
        Anlayışınız için teşekkürler... 😊
      </p>
    );
  }

  const fetchMoreData = () => {
    const newOffset = offset + products.length;
    const currentScrollPosition = scrollContainerRef.current.scrollTop;

    dispatch(fetchProductsActionCreator(newOffset, sortOption, products)).then(
      (newProducts) => {
        setOffset((prevOffset) => prevOffset + newProducts.length);

        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = currentScrollPosition;
        }

        if (!Array.isArray(newProducts)) {
          console.error("New products is not an array:", newProducts);
        }
      }
    );
  };

  const handleSort = async (option) => {
    setSortOption(option);
    toggleDropdown();
    let filterText = "";

    try {
      let sortedProducts;

      if (option === "asc") {
        filterText = "Filtre: Düşükten Yükseğe";
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
      } else if (option === "desc") {
        filterText = "Filtre: Yüksekten Düşüğe";
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
      } else if (option === "ratingAsc") {
        filterText = "Filtre: Düşükten Yükseğe Reyting";
        sortedProducts = [...products].sort((a, b) => a.rating - b.rating);
      } else if (option === "ratingDesc") {
        filterText = "Filtre: Yüksekten Düşüğe Reyting";
        sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
      }

      await dispatch(fetchProductsActionCreator(null, option, sortedProducts));
      setFilterType(filterText);
    } catch (error) {
      console.error("Error sorting products:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const filterProducts = (product) => {
    const searchRegex = new RegExp(searchTerm, "i");
    return (
      searchRegex.test(product.name) || searchRegex.test(product.description)
    );
  };

  const handleFilter = () => {
    try {
      const filtered = products.filter(filterProducts);
      setFilteredProducts(filtered);
      if (searchTerm) {
        setFilterType(`Filtre: "${searchTerm}"`);
      } else {
        setFilterType("");
      }
    } catch (error) {
      console.error("Error filtering products:", error);
    }
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

                <svg
                  className="w-2.5 h-2.5 ml-2.5 mt-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </div>

            {isDropdownVisible && (
              <div className="absolute z-10 mt-1 bg-white rounded-md shadow-xl w-48">
                <div className="py-2 border-2 rounded-lg border-sky-500">
                  <p
                    className={`block px-4 py-2 cursor-pointer ${
                      sortOption === "ratingAsc" ? "bg-white" : ""
                    } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                    onClick={() => handleSort("ratingAsc")}
                  >
                    Reytinge Göre Artan
                  </p>
                </div>
                <div className="mt-1">
                  <div className="py-2 border-2 rounded-lg border-sky-500">
                    <p
                      className={`block px-4 py-2 cursor-pointer ${
                        sortOption === "ratingDesc" ? "bg-gray-100" : ""
                      } hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white`}
                      onClick={() => handleSort("ratingDesc")}
                    >
                      Reytinge Göre Azalan
                    </p>
                  </div>
                </div>
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

      <div
        ref={scrollContainerRef}
        className="flex flex-wrap mx-auto justify-center "
      >
        {products.length > 0 ? (
          <InfiniteScroll
            dataLength={products.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={<p>No more products to show</p>}
            scrollThreshold={0.9}
            scrollableTarget={scrollContainerRef.current}
            scrollToTop={false}
          >
            <div className="flex flex-wrap m-12 justify-center ml-48 mr-48 items-center">
              {(filteredProducts.length > 0 ? filteredProducts : products).map(
                (product) => (
                  <Link
                    to={`/${product.category}/${
                      product.id
                    }/${encodeURIComponent(product.name)}`}
                    key={product.id}
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
                  </Link>
                )
              )}
            </div>
          </InfiniteScroll>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};
