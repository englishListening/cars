import React, { useState,useEffect } from "react";
// import list from "../data";
import Cards from "./card";
import Product from "./Product";
import axios from "axios";
import "./amazon.css";

const Amazon = ({props, handleClick }) => {
  const [car,setCars] = useState([])
  const items = props
  useEffect(() => {
    axios.get('https://guileless-licorice-6ebd82.netlify.app/')
    .then(balon => setCars(balon.data))
    .catch(err =>console.log(err))
},[])

  return (
    <section>
      {items.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
