import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="product-display">
      <div className="product-left">
        <div className="product-left-imgList">
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
          <img src={product.image} alt="product-img" />
        </div>
        <div className="product-display-img">
          <img
            className="product-main-img"
            src={product.image}
            alt="product-img"
          />
        </div>
      </div>
      <div className="product-right">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="star_amount">(120)</p>
        </div>
        <div className="product-right-price">
          <div className="product-price-old">${product.old_price}</div>
          <div className="product-price-new">${product.new_price}</div>
        </div>
        <div className="product-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
          totam dolor ratione dolore fuga minus provident cum soluta, culpa
          quaerat.
        </div>
        <div className="product-sizes">
          <h2>Select Size</h2>
          <div className="product-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button className="add-cart-btn">ADD TO CART</button>
        <p className="product-category">
          <span>Category: </span> Women, T-Shirt, Croptop
        </p>
        <p className="product-category">
          <span>Tag:</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
