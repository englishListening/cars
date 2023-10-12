import React from "react"; 
// import { useState } from 'react';
import './Header.css'
import { useState,useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Def from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Result from "../Search/Results";
function Header() {
// const [cars,setCars] = useState([])

// useEffect(() => {
//   axios.get('http://localhost:8888/')
//   .then(cars => setCars(cars))
//   .catch(err = console.log(err))
// })

  return (
    <div>
        
          <div className="navbar">
          <a href="/"><b className="logo">UzMashina</b></a>
          <div>
          <div className="signup">
                    <Result/>
                    {/* <input type="text" placeholder="Enter something..."/> */}
                    <button>Sign Up</button>
                
                </div>
          </div>
          </div>
          <div className="navbartwo">
            <ul>
              <li><a href="/cars">Akumulyator</a></li>
              <li><a href="/card">Shina</a></li>
              <li><a href="">Oyna</a></li>
              <li><a href="">Antifrizlar</a></li>
              <li><a href="">Kalotka</a></li>
              <li><a href="">Moylar</a></li>
              <li><a href="">Remen</a></li>
              <li><a href="">Faralar</a></li>
              <li><a href="">Vadushiy filtir</a></li>
              <li><a href="">Bamper</a></li>
              <li><a href="">Avto kimyo</a></li>
              <li><a href="">Asboblar</a></li>
              <li><a href="">Tsepleniya</a></li>
              <li><a href="">Aksesuarlar</a></li>
              <li><a href="">Yoqilg'i qismlari</a></li>
            </ul>
          </div>
          <Def/>
          <Card/>
          <Footer/>
    </div>
  );
}


export default Header