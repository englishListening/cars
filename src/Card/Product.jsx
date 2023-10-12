import React from "react";

export default function Product(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="desc">{props.type}</p>
      <p>
        <button>Buy</button>
      </p>
    </div>
  );
}