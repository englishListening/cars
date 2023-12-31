import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
export default function Product({item,hands}) {
  const { name, type, price, imageurl , id } = item;
  // const hands = () => {
  //   return(
  //     console.log(name)
  //   )
  // }
  return (
    <div className="card">
      <div className="chegara">
      <Link to={`/katalog/${id}`}>
      <img className="cardImage" src={imageurl} alt="product image" />
    </Link>
      <p className="cardName">{name}</p>
      <p className="cardType">{type}</p>
      <div className="narxlari">
      <p className="price">{price}</p>
      <div className="add" onClick={() => hands(item)} >

      <BsFillCartFill id="basket" />
      </div>
      </div>
      <button>Buy</button>
      
      </div>
     
    </div>
  );
}