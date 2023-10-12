import React from "react";

export default function CarProps(props) {
  return (
    <a href="" className="ad">
    <div className="car">
      <img className="carImage" src={props.url} alt="product image" />
      <h2 className="H2">{props.name}</h2>
    </div>
    </a>
  );
}