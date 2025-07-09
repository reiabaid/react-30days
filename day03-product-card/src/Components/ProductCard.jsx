import React from "react";
import "./ProductCard.css";

function ProductCard({ image, name, price, description }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h2>{name}</h2>
      <p className="product-price">₹{price}</p>
      {description && <p className="product-desc">{description}</p>}
      <button className="buy-btn">BUY</button>
    </div>
  );
}

export default ProductCard;
