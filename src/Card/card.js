import React from "react";

const Cards = ({ item, handleClick }) => {
  const { name, type, price, imageurl } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={imageurl} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{type}</p>
        <p>Price - {price}Rs</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
