import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrums = (props) => {
  const { product } = props;

  return (
    <div className="breadcrums">
      Home
      <img src={arrow_icon} alt="back_icon" />
      Shop <img src={arrow_icon} alt="back_icon" />
      {product.category.toUpperCase()}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Breadcrums;
