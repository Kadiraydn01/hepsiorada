import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="container">
      <div className="parent card4">
        <div
          className="card"
          style={{ backgroundImage: `url(${product.images[0].url})` }}
        >
          <div className="content-box">
            <h1 className="card-title">{product.name}</h1>
            <p className="card-content">{product.description}</p>
            <Link
              to={`/products/${product.category_id}/${
                product.id
              }/${encodeURIComponent(product.name.split(" ").join("-"))}`}
              className="see-more"
            >
              See More
            </Link>
          </div>
          <div className="date-box">
            <span className="month">Son</span>
            <span className="date">{product.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
