import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../store/action/productAction";

const ShoppingPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("pro", products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: "your-category-id",
        filter: "your-text",
        sort: "price:asc",
      })
    );
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ShoppingPage;
