import React, { useState, useEffect } from "react";
import "./cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item._id}>
          <div className="cart_img">
            <img src={item.imageurl} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </div>
        </div>
      ))}
   
    </article>
  );
};

export default Cart;
