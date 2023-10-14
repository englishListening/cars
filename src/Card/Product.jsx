import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
export default function Product(props) {
  return (
    <div className="card">
      <div className="chegara">
      <img className="cardImage" src={props.url} alt="product image" />
      <p className="cardName">{props.name}</p>
      <p className="cardType">{props.type}</p>
      <div className="narxlari">
      <p className="price">{props.price}</p>
      <BsFillCartFill id="basket"/>
      </div>
      <button>Buy</button>
      
      </div>
     
    </div>
  );
}