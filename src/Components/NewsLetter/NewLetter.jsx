import React from "react";
import "./NewLetter.css";
const NewLetter = () => {
  return (
    <div className="newsletter">
      <h1 className="title">Get Exlusive Offers On Your Mail</h1>
      <p className="sub-title">Subcribe to our newletter and stay updated</p>
      <div className="desc">
        <input type="email" placeholder="Your Email ID" />
        <button className="new-letter-btn">Subcribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
