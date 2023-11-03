import React from 'react';
import "./CardPage.css";
import { BsFillCartFill } from "react-icons/bs";

const Card = ({ item,hands}) => {
  const { name, type, price, imageurl} = item;

  return (
    <div className='Container'>
      <div className='ContainerDiv1'>
      <h2>{name}</h2>
      <img src={imageurl} alt="" />
      </div>
      <div className='ContainerDiv2'>
        <b>Narxi</b>
      <p className='ContainerPrice'>{price}</p>
      <b>Avtomobil turi</b>
      <p className='ContainerType'>{type}</p>
      <div className="addContainer" onClick={() => hands(item)} >

      <BsFillCartFill id="bassket" />
      </div>
      </div>
    </div>
  );
};

export default Card;